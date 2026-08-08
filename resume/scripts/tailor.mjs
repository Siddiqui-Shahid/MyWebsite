#!/usr/bin/env node
/**
 * Tailor resume from a job description using local Ollama.
 *
 * Usage:
 *   npm run resume:tailor
 *   npm run resume:tailor -- path/to/jd.txt
 *   OLLAMA_MODEL=qwen2.5:7b npm run resume:tailor
 *
 * Paste JD into resume/tailor/jd.txt (default), then run.
 * Outputs: resume/out/<slug>/resume.tex + resume.pdf
 */

import { spawn } from 'node:child_process'
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  copyFileSync,
} from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '../..')
const RESUME_DIR = join(ROOT, 'resume')
const TAILOR_DIR = join(RESUME_DIR, 'tailor')
const OUT_DIR = join(RESUME_DIR, 'out')
const BANK_PATH = join(TAILOR_DIR, 'content-bank.json')
const DEFAULT_JD = join(TAILOR_DIR, 'jd.txt')

const OLLAMA_HOST = process.env.OLLAMA_HOST || 'http://127.0.0.1:11434'
const PREFERRED_MODELS = ['qwen2.5:7b', 'llama3.2:3b']
let OLLAMA_MODEL = process.env.OLLAMA_MODEL || ''
const SKIP_PDF = process.env.SKIP_PDF === '1'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function die(msg, code = 1) {
  console.error(`✗ ${msg}`)
  process.exit(code)
}

function readJd(path) {
  if (!existsSync(path)) die(`JD file not found: ${path}`)
  let text = readFileSync(path, 'utf8')
  // Strip the instruction header if still present
  const marker = '---'
  const idx = text.indexOf(marker)
  if (idx !== -1 && text.slice(0, idx).toLowerCase().includes('paste')) {
    text = text.slice(idx + marker.length)
  }
  text = text.trim()
  if (text.length < 40) die('JD looks empty. Paste a job description into resume/tailor/jd.txt')
  return text
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 48) || 'tailored'
}

function escapeLatex(s) {
  return String(s)
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/([{}$&#_^%~])/g, '\\$1')
}

function stripLatexNoise(s) {
  return String(s)
    .replace(/\\textbf\{([^}]*)\}/g, '$1')
    .replace(/\\textit\{([^}]*)\}/g, '$1')
    .replace(/\\texttt\{([^}]*)\}/g, '$1')
    .replace(/\\&/g, '&')
    .replace(/\\%/g, '%')
    .replace(/\\#/g, '#')
    .replace(/\\_/g, '_')
    .replace(/---/g, '—')
    .replace(/--/g, '–')
}

function extractJson(raw) {
  const trimmed = raw.trim()
  try {
    return JSON.parse(trimmed)
  } catch {
    /* continue */
  }
  const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/)
  if (fence) {
    try {
      return JSON.parse(fence[1].trim())
    } catch {
      /* continue */
    }
  }
  const start = trimmed.indexOf('{')
  const end = trimmed.lastIndexOf('}')
  if (start >= 0 && end > start) {
    return JSON.parse(trimmed.slice(start, end + 1))
  }
  throw new Error('Model did not return valid JSON')
}

function modelAvailable(names, model) {
  if (!model) return false
  const base = model.split(':')[0]
  return names.some(
    (n) => n === model || n.startsWith(`${model}:`) || n === `${base}:latest` || n.startsWith(`${base}:`),
  )
}

async function ensureOllama() {
  try {
    const r = await fetch(`${OLLAMA_HOST}/api/tags`)
    if (!r.ok) throw new Error(`status ${r.status}`)
    const data = await r.json()
    const names = (data.models || []).map((m) => m.name)

    if (OLLAMA_MODEL) {
      if (!modelAvailable(names, OLLAMA_MODEL)) {
        die(
          `Model "${OLLAMA_MODEL}" not found locally.\n` +
            `  Run: ollama pull ${OLLAMA_MODEL}\n` +
            `  Available: ${names.join(', ') || '(none)'}`,
        )
      }
      return
    }

    const picked = PREFERRED_MODELS.find((m) => modelAvailable(names, m))
    if (!picked) {
      die(
        `No preferred model found.\n` +
          `  Run: npm run resume:setup\n` +
          `  Available: ${names.join(', ') || '(none)'}`,
      )
    }
    OLLAMA_MODEL = picked
    console.log(`→ Using model: ${OLLAMA_MODEL}`)
  } catch (e) {
    die(
      `Cannot reach Ollama at ${OLLAMA_HOST}.\n` +
        `  Start it with: brew services start ollama\n` +
        `  Details: ${e.message}`,
    )
  }
}

async function ollamaChat(messages, { temperature = 0.2, format = 'json' } = {}) {
  const body = {
    model: OLLAMA_MODEL,
    messages,
    stream: false,
    format,
    options: {
      temperature,
      num_ctx: 8192,
    },
  }
  const r = await fetch(`${OLLAMA_HOST}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!r.ok) {
    const t = await r.text()
    throw new Error(`Ollama chat failed (${r.status}): ${t}`)
  }
  const data = await r.json()
  return data.message?.content ?? ''
}

function catalogForPrompt(bank) {
  const bullets = []
  for (const job of bank.experience) {
    for (const b of job.bullets) {
      bullets.push({
        id: b.id,
        company: job.company,
        tags: b.tags,
        text: stripLatexNoise(b.text),
      })
    }
  }
  const projects = bank.projects.map((p) => ({
    id: p.id,
    name: p.name,
    tags: p.tags,
    stack: p.stack,
    summary: p.bullets.map(stripLatexNoise).join(' '),
  }))
  const arch = bank.architectureExpertise.map((a) => ({
    id: a.id,
    tags: a.tags,
    text: stripLatexNoise(a.text),
  }))
  const skills = bank.skillCategories.map((c) => ({
    id: c.id,
    label: stripLatexNoise(c.label),
    items: c.items.map(stripLatexNoise),
  }))
  return { bullets, projects, arch, skills }
}

function buildPrompt(jd, catalog) {
  const system = `You are an expert technical resume tailor. You select and rewrite ONLY from the candidate's real content bank. Never invent employers, metrics, titles, or projects.

Return STRICT JSON matching the schema. No markdown, no commentary.`

  const user = `JOB DESCRIPTION:
"""
${jd}
"""

CANDIDATE CONTENT BANK (use only these IDs for bullets/projects/architecture):
BULLETS:
${JSON.stringify(catalog.bullets, null, 2)}

PROJECTS:
${JSON.stringify(catalog.projects, null, 2)}

ARCHITECTURE_ITEMS:
${JSON.stringify(catalog.arch, null, 2)}

SKILL_CATEGORIES:
${JSON.stringify(catalog.skills, null, 2)}

TASK:
1. Write a short role title (plain text, no LaTeX) aligned to the JD (e.g. "iOS Software Engineer").
2. Write a 2–3 sentence summary (plain text) tailored to the JD. Keep real facts: 3.5+ years, 30+ lakh DAU, BookMyShow/District/Raw Engineering experience. Do not invent.
3. Select experience bullet IDs: aim for 12–18 total across companies (all 3 companies should appear). Prefer JD-relevant bullets; pad with strong scale/architecture bullets to fill 1–2 pages.
4. Select 3–5 project IDs most relevant to the JD.
5. Order skill category IDs by JD relevance (most important first). Keep most categories.
6. For EACH skill category, reorder items so JD-matching skills come first. You may ADD jdKeywords into the best-fitting categories.
7. Select 5–8 architectureExpertise IDs ordered by JD relevance.
8. Extract "bizarre" / uncommon / ATS-critical technical keywords from the JD that are NOT already obvious in the skill list (frameworks, APIs, tools, patterns, Apple frameworks, ML terms, etc.). Put them in:
   - jdSkillKeywords: array of short keywords to inject into Technical Skills (prefer concrete tech names)
   - jdArchitectureKeywords: array of short keywords/phrases to weave into Architecture Expertise
   Prefer keywords that are plausible for an iOS/Flutter/AI engineer with this background. Drop soft-skill fluff (e.g. "team player"). Cap each list at 10.

JSON SCHEMA:
{
  "companySlug": "short-company-or-role-slug",
  "title": "string",
  "summary": "string (2-3 sentences)",
  "experienceBulletIds": ["bullet-id", "..."],
  "projectIds": ["project-id", "..."],
  "skillCategoryOrder": ["category-id", "..."],
  "skillItemOrder": { "languages": ["Swift", "..."], "...": [] },
  "architectureIds": ["arch-id", "..."],
  "jdSkillKeywords": ["WidgetKit", "App Clips", "..."],
  "jdArchitectureKeywords": ["Deep Linking", "..."],
  "projectBulletCounts": { "fintrack": 2, "gymflow": 2 }
}`

  return { system, user }
}

function unique(arr) {
  return [...new Set(arr)]
}

function asArray(value) {
  if (Array.isArray(value)) return value
  if (value == null) return []
  if (typeof value === 'string') {
    return value
      .split(/[,\n]/)
      .map((s) => s.trim())
      .filter(Boolean)
  }
  if (typeof value === 'object') return Object.values(value)
  return []
}

function asObject(value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) return value
  return {}
}

function validatePlan(plan, bank) {
  const bulletMap = new Map()
  for (const job of bank.experience) {
    for (const b of job.bullets) bulletMap.set(b.id, { job, bullet: b })
  }
  const projectMap = new Map(bank.projects.map((p) => [p.id, p]))
  const archMap = new Map(bank.architectureExpertise.map((a) => [a.id, a]))
  const skillMap = new Map(bank.skillCategories.map((c) => [c.id, c]))

  let bulletIds = asArray(plan.experienceBulletIds).filter((id) => bulletMap.has(String(id)))
  if (bulletIds.length < 8) {
    // Fallback: take top bullets from each job
    bulletIds = bank.experience.flatMap((j) => j.bullets.slice(0, 4).map((b) => b.id))
  }
  // Cap for 1–2 pages
  if (bulletIds.length > 18) bulletIds = bulletIds.slice(0, 18)

  let projectIds = asArray(plan.projectIds).filter((id) => projectMap.has(String(id)))
  if (projectIds.length < 3) {
    projectIds = bank.projects.slice(0, 4).map((p) => p.id)
  }
  if (projectIds.length > 5) projectIds = projectIds.slice(0, 5)

  let architectureIds = asArray(plan.architectureIds).filter((id) => archMap.has(String(id)))
  if (architectureIds.length < 4) {
    architectureIds = bank.architectureExpertise.map((a) => a.id)
  }
  if (architectureIds.length > 8) architectureIds = architectureIds.slice(0, 8)

  let skillCategoryOrder = asArray(plan.skillCategoryOrder)
    .map(String)
    .filter((id) => skillMap.has(id))
  for (const c of bank.skillCategories) {
    if (!skillCategoryOrder.includes(c.id)) skillCategoryOrder.push(c.id)
  }

  const skillItemOrder = {}
  const rawSkillItemOrder = asObject(plan.skillItemOrder)
  for (const cat of bank.skillCategories) {
    const preferred = asArray(rawSkillItemOrder[cat.id])
    const ordered = []
    for (const item of preferred) {
      const match = cat.items.find((i) => stripLatexNoise(i).toLowerCase() === String(item).toLowerCase())
      if (match && !ordered.includes(match)) ordered.push(match)
    }
    for (const item of cat.items) {
      if (!ordered.includes(item)) ordered.push(item)
    }
    skillItemOrder[cat.id] = ordered
  }

  const jdSkillKeywords = unique(
    asArray(plan.jdSkillKeywords)
      .map((k) => String(k).trim())
      .filter((k) => k.length >= 2 && k.length <= 48),
  ).slice(0, 10)

  const jdArchitectureKeywords = unique(
    asArray(plan.jdArchitectureKeywords)
      .map((k) => String(k).trim())
      .filter((k) => k.length >= 2 && k.length <= 64),
  ).slice(0, 10)

  const title = String(plan.title || bank.defaultTitle).trim()
  const summary = String(plan.summary || '').trim()
  const companySlug = slugify(plan.companySlug || title)

  return {
    companySlug,
    title,
    summary,
    experienceBulletIds: unique(bulletIds),
    projectIds: unique(projectIds),
    skillCategoryOrder,
    skillItemOrder,
    architectureIds: unique(architectureIds),
    jdSkillKeywords,
    jdArchitectureKeywords,
    projectBulletCounts: plan.projectBulletCounts || {},
    bulletMap,
    projectMap,
    archMap,
    skillMap,
  }
}

function boldJdTerms(text, keywords) {
  // Light emphasis: wrap whole-word keyword matches once
  let out = text
  for (const kw of keywords) {
    if (!kw || kw.length < 3) continue
    const re = new RegExp(`(?<!\\\\textbf\\{)(?<!\\w)(${escapeRegExp(kw)})(?!\\w)`, 'i')
    if (re.test(out) && !out.toLowerCase().includes(`\\textbf{${kw.toLowerCase()}`)) {
      out = out.replace(re, '\\textbf{$1}')
    }
  }
  return out
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function toLatexPlain(text) {
  // Convert plain summary into LaTeX-safe with selective bolding of known phrases
  return escapeLatex(text)
    .replace(/3\.5\+/g, '\\textbf{3.5+}')
    .replace(/30\+ lakh DAU/gi, '\\textbf{30+ lakh DAU}')
    .replace(/MVVM/g, '\\textbf{MVVM}')
    .replace(/Clean Architecture/g, '\\textbf{Clean Architecture}')
    .replace(/Protocol-Oriented Programming \(POP\)/g, '\\textbf{Protocol-Oriented Programming (POP)}')
    .replace(/Server-Driven UI \(SDUI\)/g, '\\textbf{Server-Driven UI (SDUI)}')
    .replace(/Context Engineering/g, '\\textbf{Context Engineering}')
    .replace(/on-device AI/gi, '\\textbf{on-device AI}')
    .replace(/Flutter/g, '\\textbf{Flutter}')
}

function renderTex(bank, plan) {
  const m = bank.meta
  const titleTex = escapeLatex(plan.title)

  // Experience grouped by company, preserving bank order
  const selectedByJob = new Map()
  for (const id of plan.experienceBulletIds) {
    const entry = plan.bulletMap.get(id)
    if (!entry) continue
    if (!selectedByJob.has(entry.job.id)) selectedByJob.set(entry.job.id, [])
    selectedByJob.get(entry.job.id).push(entry.bullet)
  }

  const experienceBlocks = []
  for (const job of bank.experience) {
    const bullets = selectedByJob.get(job.id)
    if (!bullets?.length) continue
    const company = job.companyHref
      ? `${escapeLatex(job.company)} \\href{${job.companyHref}}{\\faExternalLink*}`
      : escapeLatex(job.company)
    const items = bullets
      .map((b) => `    \\resumeItem{${boldJdTerms(b.text, plan.jdSkillKeywords)}}`)
      .join('\n')
    experienceBlocks.push(`\\resumeSubheading
  {${company}}{${job.dates}}
  {\\underline{${escapeLatex(job.title)}}}{${escapeLatex(job.location)}}
  \\resumeItemListStart
${items}
  \\resumeItemListEnd`)
  }

  // Projects
  const projectBlocks = []
  for (const pid of plan.projectIds) {
    const p = plan.projectMap.get(pid)
    if (!p) continue
    const count = Math.max(1, Math.min(p.bullets.length, Number(plan.projectBulletCounts?.[pid]) || (p.bullets.length > 1 ? 2 : 1)))
    const name = p.href
      ? `\\href{${p.href}}{${escapeLatex(p.name)}}`
      : escapeLatex(p.name)
    const items = p.bullets
      .slice(0, count)
      .map((t) => `      \\resumeItem{${boldJdTerms(t, plan.jdSkillKeywords)}}`)
      .join('\n')
    projectBlocks.push(`  \\resumeProjectHeading
    {${name}}
    {${p.stack}}
    {${p.tagline}}
    \\resumeItemListStart
${items}
    \\resumeItemListEnd`)
  }

  // Skills — inject JD keywords into Architecture & Patterns and a dedicated JD Keywords line if needed
  const skillLines = []
  const usedKw = new Set()
  for (const catId of plan.skillCategoryOrder) {
    const cat = plan.skillMap.get(catId)
    if (!cat) continue
    let items = [...(plan.skillItemOrder[catId] || cat.items)]
    // Inject jd keywords into architecture / ios / on-device-ai / cross-platform preferentially
    if (['architecture', 'ios', 'on-device-ai', 'cross-platform', 'devtools', 'backend'].includes(catId)) {
      for (const kw of plan.jdSkillKeywords) {
        const already = items.some((i) => stripLatexNoise(i).toLowerCase() === kw.toLowerCase())
        if (!already && !usedKw.has(kw.toLowerCase())) {
          items = [escapeLatex(kw), ...items]
          usedKw.add(kw.toLowerCase())
        }
      }
    }
    // Cap length per category for readability
    if (items.length > 14) items = items.slice(0, 14)
    skillLines.push(`    \\textbf{${cat.label}:} ${items.join(', ')}`)
  }
  // Any leftover bizarre keywords get their own line at the top after languages
  const leftover = plan.jdSkillKeywords.filter((k) => !usedKw.has(k.toLowerCase()))
  if (leftover.length) {
    skillLines.splice(
      1,
      0,
      `    \\textbf{JD Focus Keywords:} ${leftover.map(escapeLatex).join(', ')}`,
    )
  }

  // Architecture — selected items + inject keywords into first matching item or as new bullet
  const archItems = []
  for (const aid of plan.architectureIds) {
    const a = plan.archMap.get(aid)
    if (!a) continue
    archItems.push(`  \\item ${boldJdTerms(a.text, plan.jdArchitectureKeywords)}`)
  }
  if (plan.jdArchitectureKeywords.length) {
    const kwList = plan.jdArchitectureKeywords.map((k) => `\\textbf{${escapeLatex(k)}}`).join(', ')
    archItems.unshift(
      `  \\item \\textbf{Role-Aligned Focus:} Hands-on exposure and transferable expertise across ${kwList} — mapped onto existing iOS / Flutter / on-device AI delivery.`,
    )
  }
  if (archItems.length > 8) archItems.length = 8

  const summaryTex = plan.summary
    ? toLatexPlain(plan.summary)
    : bank.defaultSummaryLines.join(' ')

  return `% Auto-generated by resume/scripts/tailor.mjs — do not edit by hand.
% Source content: master-resume.tex / content-bank.json
% Theme: resume.tex
% Model: ${OLLAMA_MODEL}

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[dvipsnames,svgnames,x11names]{xcolor}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage[english]{babel}
\\usepackage{fontawesome5}
\\usepackage{graphicx}
\\usepackage{setspace}
\\usepackage{iftex}
\\setlength{\\columnsep}{-1pt}
\\ifPDFTeX
  \\input{glyphtounicode}
\\fi

\\definecolor{cvblue}{HTML}{0E5484}
\\definecolor{darkcolor}{HTML}{0F4539}
\\definecolor{SlateGrey}{HTML}{2E2E2E}
\\definecolor{LightGrey}{HTML}{666666}

\\addtolength{\\oddsidemargin}{-0.60in}
\\addtolength{\\evensidemargin}{-0.55in}
\\addtolength{\\textwidth}{1.25in}
\\addtolength{\\topmargin}{-0.82in}
\\addtolength{\\textheight}{1.62in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}
\\setstretch{1.02}

\\titleformat{\\section}{
  \\vspace{1pt}\\scshape\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\ifPDFTeX
  \\pdfgentounicode=1
\\fi

\\newcommand{\\resumeItem}[1]{%
  \\item{#1}%
}

\\newcommand{\\resumeSubheading}[4]{%
  \\vspace{3pt}\\item
    \\begin{tabular*}{1.0\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{\\large#1} & \\textbf{#2} \\\\
      \\textit{#3} & \\textit{#4} \\\\
    \\end{tabular*}\\vspace{2.5pt}%
}

\\newcommand{\\resumeProjectHeading}[3]{%
  \\vspace{2pt}\\item
    \\begin{tabular*}{1.001\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & \\textbf{#3}\\\\
    \\end{tabular*}\\vspace{-1pt}
    {\\textit{#2}}\\vspace{1pt}%
}

\\renewcommand\\labelitemi{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{%
  \\begin{itemize}[leftmargin=0.0in, label={}, topsep=0pt, itemsep=0pt, parsep=0pt]%
}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}

\\newcommand{\\resumeItemListStart}{%
  \\begin{itemize}[topsep=0.5pt, itemsep=1pt, parsep=0pt, leftmargin=*]%
}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{0pt}}

\\begin{document}

\\begin{center}
    {\\Huge \\scshape ${m.name}} \\\\[4pt]
    \\normalsize
    \\href{mailto:${m.email}}{\\raisebox{-0.2\\height}\\faEnvelope\\ ${m.email}}
    \\;|\\;
    \\href{tel:${m.phoneHref}}{\\raisebox{-0.2\\height}\\faPhone\\ ${m.phone}}
    \\;|\\;
    \\href{${m.linkedin}}{\\raisebox{-0.2\\height}\\faLinkedin\\ LinkedIn}
    \\;|\\;
    \\href{${m.github}}{\\raisebox{-0.2\\height}\\faGithub\\ GitHub}
    \\;|\\;
    \\href{${m.portfolio}}{\\raisebox{-0.2\\height}\\faGlobe\\ Portfolio}
    \\\\[2pt]
    Education: ${m.education}
\\end{center}

\\vspace{3pt}
\\noindent\\textbf{${titleTex}} ${summaryTex}

\\section{Technical Skills}
\\begin{itemize}[leftmargin=0.12in, label={}, topsep=1pt, itemsep=1pt, parsep=0pt]
  \\item{
${skillLines.join(' \\\\[1pt]\n')}
  }
\\end{itemize}

\\section{Architecture Expertise}
\\begin{itemize}[leftmargin=0.17in, label={\\textbullet}, itemsep=1pt, topsep=1pt, parsep=0pt]
${archItems.join('\n')}
\\end{itemize}

\\section{Experience}
\\resumeSubHeadingListStart

${experienceBlocks.join('\n\n')}

\\resumeSubHeadingListEnd

\\section{Projects}
\\resumeSubHeadingListStart

${projectBlocks.join('\n\n')}

\\resumeSubHeadingListEnd

\\end{document}
`
}

function runBuild(texPath, outPdfPath) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn('bash', [join(RESUME_DIR, 'scripts/build.sh'), texPath, outPdfPath], {
      cwd: ROOT,
      stdio: 'inherit',
      env: process.env,
    })
    child.on('exit', (code) => {
      if (code === 0) resolvePromise()
      else reject(new Error(`build.sh exited ${code}`))
    })
  })
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const jdPath = resolve(process.argv[2] || DEFAULT_JD)
  console.log(`→ JD: ${jdPath}`)
  console.log(`→ Model: ${OLLAMA_MODEL} @ ${OLLAMA_HOST}`)

  const bank = JSON.parse(readFileSync(BANK_PATH, 'utf8'))
  const jd = readJd(jdPath)
  await ensureOllama()

  const catalog = catalogForPrompt(bank)
  const { system, user } = buildPrompt(jd, catalog)

  console.log('→ Asking Ollama to tailor resume (may take 20–90s)…')
  const t0 = Date.now()
  const raw = await ollamaChat(
    [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
    { temperature: 0.15, format: 'json' },
  )
  console.log(`→ Model responded in ${((Date.now() - t0) / 1000).toFixed(1)}s`)

  let planRaw
  try {
    planRaw = extractJson(raw)
  } catch (e) {
    writeFileSync(join(OUT_DIR, 'last-model-raw.txt'), raw)
    die(`Failed to parse model JSON: ${e.message}\n  Raw saved to resume/out/last-model-raw.txt`)
  }

  const plan = validatePlan(planRaw, bank)
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const slug = `${plan.companySlug}-${stamp}`
  const runDir = join(OUT_DIR, slug)
  mkdirSync(runDir, { recursive: true })

  const tex = renderTex(bank, plan)
  const texPath = join(runDir, 'resume.tex')
  const pdfPath = join(runDir, 'resume.pdf')
  const planPath = join(runDir, 'plan.json')

  writeFileSync(texPath, tex)
  writeFileSync(planPath, JSON.stringify({ model: OLLAMA_MODEL, jdPath, plan: planRaw, validated: {
    title: plan.title,
    experienceBulletIds: plan.experienceBulletIds,
    projectIds: plan.projectIds,
    architectureIds: plan.architectureIds,
    jdSkillKeywords: plan.jdSkillKeywords,
    jdArchitectureKeywords: plan.jdArchitectureKeywords,
  } }, null, 2))

  // Convenience copies
  copyFileSync(texPath, join(OUT_DIR, 'latest.tex'))
  writeFileSync(join(OUT_DIR, 'latest-plan.json'), JSON.stringify(planRaw, null, 2))

  console.log(`✓ Wrote ${texPath}`)
  console.log(`  Title: ${plan.title}`)
  console.log(`  Bullets: ${plan.experienceBulletIds.length}`)
  console.log(`  Projects: ${plan.projectIds.join(', ')}`)
  console.log(`  JD skill keywords: ${plan.jdSkillKeywords.join(', ') || '(none)'}`)
  console.log(`  JD architecture keywords: ${plan.jdArchitectureKeywords.join(', ') || '(none)'}`)

  if (SKIP_PDF) {
    console.log('→ SKIP_PDF=1 — skipping LaTeX compile')
    return
  }

  console.log('→ Compiling PDF…')
  await runBuild(texPath, pdfPath)
  copyFileSync(pdfPath, join(OUT_DIR, 'latest.pdf'))
  console.log(`✓ PDF: ${pdfPath}`)
  console.log(`✓ Also: resume/out/latest.pdf`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
