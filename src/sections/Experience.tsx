import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { experience } from '../data/experience'

const sectionId = 'experience'
const headingId = 'experience-heading'

export function Experience() {
  return (
    <Section id={sectionId} labelledBy={headingId} className="bg-muted/40">
      <Container>
        <h2
          id={headingId}
          className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
        >
          Experience
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          Teams I have shipped with — ownership, pragmatism, and attention to
          production detail.
        </p>

        <ol className="relative mt-12 max-w-3xl border-l border-border pl-8 md:pl-10">
          {experience.map((role) => (
            <li key={`${role.company}-${role.period}`} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[21px] top-1.5 flex size-3 rounded-full border-2 border-background bg-primary md:-left-[25px] md:top-2 md:size-3.5"
                aria-hidden
              />
              <h3 className="text-xl font-semibold text-text-primary">
                {role.company}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                {role.title}
                <span className="text-text-secondary/80">
                  {' '}
                  · {role.period} · {role.location}
                </span>
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-text-secondary">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
