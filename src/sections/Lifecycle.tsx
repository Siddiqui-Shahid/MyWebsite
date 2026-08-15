import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { lifecycleSteps } from '../data/lifecycle'

const sectionId = 'process'
const headingId = 'lifecycle-heading'

export function Lifecycle() {
  return (
    <Section id={sectionId} labelledBy={headingId}>
      <Container>
        <SectionHeading
          id={headingId}
          kicker="How I work"
          title="From requirement to a release you can trust"
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lifecycleSteps.map((step, index) => {
            const { Icon } = step
            return (
              <li
                key={step.title}
                className="relative rounded-3xl border border-border bg-surface/70 p-6"
              >
                <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div
                  className="mt-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  aria-hidden
                >
                  <Icon className="size-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </li>
            )
          })}
        </ol>
      </Container>
    </Section>
  )
}
