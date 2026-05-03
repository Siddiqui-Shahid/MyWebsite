import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { services } from '../data/services'

const sectionId = 'services'
const headingId = 'services-heading'

export function Services() {
  return (
    <Section id={sectionId} labelledBy={headingId}>
      <Container>
        <h2
          id={headingId}
          className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
        >
          Services
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          Focused help across the stack you need—from first release to hardening
          at scale.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <Card key={title} className="flex flex-col gap-4 bg-muted/60">
              <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-muted text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
              <p className="text-base leading-relaxed text-text-secondary">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
