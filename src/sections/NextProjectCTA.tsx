import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'

export function NextProjectCTA() {
  const mailto = `mailto:${site.email}?subject=Project%20inquiry`

  return (
    <Section id="cta" className="py-16 md:py-20">
      <Container>
        <div className="rounded-3xl border border-border bg-muted px-8 py-14 text-center shadow-sm md:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            {site.nextProject.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            {site.nextProject.subtext}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={mailto} variant="primary">
              {site.nextProject.cta}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
