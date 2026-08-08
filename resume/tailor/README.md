# Resume tailor (local Ollama)

Paste a job description → get a 1–2 page tailored PDF using content from `master-resume.tex` and the visual theme from `resume.tex`.

## Setup (once)

```bash
npm run resume:setup
# or: brew install ollama && brew services start ollama && ollama pull qwen2.5:7b
```

## Usage

1. Paste the full JD into [`jd.txt`](./jd.txt) (replace the sample).
2. Run:

```bash
npm run resume:tailor
```

Outputs land in `resume/out/<slug>-<timestamp>/`:

- `resume.tex` / `resume.pdf`
- `plan.json` (what the model selected)

Also updates:

- `resume/out/latest.pdf`
- `resume/out/latest.tex`

Optional:

```bash
npm run resume:tailor -- ./path/to/other-jd.txt
OLLAMA_MODEL=llama3.2:3b npm run resume:tailor   # faster / smaller
SKIP_PDF=1 npm run resume:tailor                 # tex only
```

## What it does

1. Reads structured content from `content-bank.json` (sourced from `master-resume.tex`).
2. Asks local Ollama to pick bullets/projects, rewrite the summary/title, and extract JD keywords.
3. Injects uncommon JD keywords into **Technical Skills** and **Architecture Expertise**.
4. Renders LaTeX with the `resume.tex` theme and compiles a PDF.

The portfolio site resume (`public/resume.pdf`) is **not** overwritten — only `npm run resume` updates that.
