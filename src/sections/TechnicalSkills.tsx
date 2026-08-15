import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { atsKeywords, shippingIntro, skillCategories } from '../data/skills'

const sectionId = 'skills'
const headingId = 'skills-heading'

export function TechnicalSkills() {
  return (
    <Section id={sectionId} labelledBy={headingId}>
      <Container>
        <SectionHeading
          id={headingId}
          kicker="Stack"
          title="iOS and Flutter, production-first"
          description={shippingIntro}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-border bg-surface/70 p-6"
            >
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block rounded-full border border-white/8 bg-background/60 px-3 py-1.5 text-sm text-text-primary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {atsKeywords.map((keyword) => (
            <li key={keyword}>
              <span className="inline-block rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-medium text-text-secondary">
                {keyword}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
