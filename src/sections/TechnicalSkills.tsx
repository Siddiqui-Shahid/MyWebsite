import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { aiDevelopmentIntro, skillCategories } from '../data/skills'

const sectionId = 'skills'
const headingId = 'skills-heading'

export function TechnicalSkills() {
  return (
    <Section id={sectionId} labelledBy={headingId} className="bg-muted/40">
      <Container>
        <h2
          id={headingId}
          className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
        >
          Technical skills
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          Languages, frameworks, and the AI-assisted toolchain I use to ship and
          maintain production apps.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-background/80 p-6 shadow-sm md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            AI-driven development
          </h3>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            {aiDevelopmentIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block rounded-full border border-border bg-muted/60 px-3 py-1.5 text-sm text-text-primary shadow-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
