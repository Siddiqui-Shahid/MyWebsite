import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { experience } from '../data/experience'

const sectionId = 'experience'
const headingId = 'experience-heading'

export function Experience() {
  return (
    <Section id={sectionId} labelledBy={headingId} className="bg-muted/30">
      <Container>
        <SectionHeading
          id={headingId}
          kicker="Experience"
          title="Teams where I owned iOS in production"
          description="Consumer scale, App Store releases, and the same bar I bring to Flutter."
        />

        <ol className="mt-14 space-y-5">
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.period}`}
              className="rounded-3xl border border-border bg-surface/70 p-6 shadow-[var(--shadow-soft)] md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary md:text-2xl">
                    {role.company}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">{role.title}</p>
                </div>
                <p className="rounded-full border border-white/8 bg-background/60 px-3 py-1 text-xs text-text-secondary">
                  {role.period} · {role.location}
                </p>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-text-secondary md:text-base">
                {role.highlights.map((item) => (
                  <li key={item} className="border-l border-primary/30 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
