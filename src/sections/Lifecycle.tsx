import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { lifecycleSteps } from '../data/lifecycle'

const sectionId = 'process'
const headingId = 'lifecycle-heading'

export function Lifecycle() {
  return (
    <Section id={sectionId} labelledBy={headingId} className="bg-background">
      <Container>
        <h2
          id={headingId}
          className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
        >
          Development lifecycle
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          A clear path from first sketch to something your users can rely on.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">
          {lifecycleSteps.map((step) => {
            const { Icon } = step
            return (
              <article
                key={step.title}
                className="rounded-2xl border border-border bg-muted/60 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md md:p-5 xl:p-6"
              >
                <div
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary"
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
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
