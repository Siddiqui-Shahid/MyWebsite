import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { services } from '../data/services'

const sectionId = 'services'
const headingId = 'services-heading'

export function Services() {
  return (
    <Section id={sectionId} labelledBy={headingId} className="bg-muted/30">
      <Container>
        <SectionHeading
          id={headingId}
          kicker="What I do"
          title="iOS, Flutter, and App Store ownership"
          description="The same production habits on both stacks — architecture, crash health, and release."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <Card key={title} className="flex flex-col gap-4 bg-muted/40">
              <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
