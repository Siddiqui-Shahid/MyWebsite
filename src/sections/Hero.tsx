import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'

import profilePhoto from '../assets/profile.png'

export function Hero() {
  const { hero } = site

  return (
    <Section id="top" className="relative scroll-mt-0 overflow-hidden pb-20 pt-14 md:pb-28 md:pt-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(52vh,520px)] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,color-mix(in_oklab,var(--color-primary)_28%,transparent),transparent_65%)]"
        aria-hidden
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="relative w-full max-w-lg">
            <div className="pointer-events-none absolute -left-16 top-1/2 size-56 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl md:size-72" />
            <div className="pointer-events-none absolute -right-12 bottom-0 size-48 rounded-full bg-primary/15 blur-3xl md:size-56" />

            <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 p-8 shadow-[var(--shadow-soft)] md:p-10">
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-border)_55%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-border)_55%,transparent)_1px,transparent_1px)] bg-[length:32px_32px] opacity-[0.65]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent_55%)]"
                aria-hidden
              />

              <div className="relative flex flex-col items-center gap-6">
                <div className="relative">
                  <img
                    src={profilePhoto}
                    alt={hero.photoAlt}
                    width={280}
                    height={280}
                    className="size-28 rounded-full object-cover shadow-[var(--shadow-soft)] ring-4 ring-primary/35 ring-offset-4 ring-offset-[color-mix(in_oklab,var(--color-muted)_85%,transparent)] md:size-36 md:ring-offset-[10px]"
                    decoding="async"
                  />
                </div>

                <ul className="flex flex-wrap items-center justify-center gap-2">
                  {hero.stackCards.map((label) => (
                    <li key={label}>
                      <span className="inline-flex rounded-xl border border-border/90 bg-background/85 px-3 py-1.5 text-xs font-medium text-text-primary shadow-sm backdrop-blur-sm md:text-sm">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <h1 className="mt-12 max-w-4xl text-pretty text-4xl font-bold tracking-tight text-text-primary md:text-6xl md:leading-[1.08] lg:text-7xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {hero.subheadline}
          </p>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-text-secondary md:text-base">
            {hero.stats.map((text) => (
              <li key={text} className="flex items-center gap-2">
                <span
                  className="size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {hero.trustChips.map((name) => (
              <li key={name}>
                <span className="inline-block rounded-full border border-border bg-muted/70 px-4 py-2 text-sm text-text-secondary shadow-sm">
                  {name}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#work" variant="primary">
              View Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
