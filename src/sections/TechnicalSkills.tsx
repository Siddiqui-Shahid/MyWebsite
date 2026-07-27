import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { aiDevelopmentIntro, atsKeywords, skillCategories } from '../data/skills'

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
          iOS, Flutter, on-device AI, and the toolchain I use to ship production
          apps and privacy-first products.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-background/80 p-6 shadow-sm md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            AI-driven development
          </h3>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            {aiDevelopmentIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
            Core keywords
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {atsKeywords.map((keyword) => (
              <li key={keyword}>
                <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-text-primary">
                  {keyword}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
