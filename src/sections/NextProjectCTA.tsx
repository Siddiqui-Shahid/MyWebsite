import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'

export function NextProjectCTA() {
  const mailto = `mailto:${site.email}?subject=iOS%20/%20Flutter%20role`

  return (
    <Section id="cta" className="py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 px-8 py-16 text-center shadow-[var(--shadow-soft)] md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-primary)_32%,transparent),transparent_55%),radial-gradient(ellipse_at_bottom_left,color-mix(in_oklab,var(--color-accent)_16%,transparent),transparent_50%)]"
            aria-hidden
          />
          <div className="relative">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Available immediately
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
              {site.nextProject.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary md:text-lg">
              {site.nextProject.subtext}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={mailto} variant="primary">
                {site.nextProject.cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
