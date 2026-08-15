import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'
import { resumeHref } from '../lib/publicUrl'

import profilePhoto from '../assets/profile.png'

export function Hero() {
  const { hero } = site
  const resumeLink = resumeHref(site.resume.href)

  return (
    <Section id="top" className="relative scroll-mt-0 overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_0%,color-mix(in_oklab,var(--color-primary)_22%,transparent),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_10%,color-mix(in_oklab,var(--color-accent)_12%,transparent),transparent_50%)]"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary md:text-sm">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" aria-hidden />
              {hero.availability}
            </p>

            <h1 className="mt-6 max-w-xl text-pretty text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl md:text-6xl md:leading-[1.05]">
              <span className="bg-[linear-gradient(120deg,#f7fbff_20%,#4ea1ff_70%,#7ee0c8)] bg-clip-text text-transparent">
                {hero.headline}
              </span>
              <span className="mt-2 block text-text-secondary">{hero.tagline}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
              {hero.subheadline}
            </p>

            <ul className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              {hero.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-2xl border border-border bg-white/3 px-3 py-4 text-center"
                >
                  <p className="text-xl font-semibold tracking-tight text-text-primary md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-text-secondary">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#work" variant="primary">
                View work
              </Button>
              <Button href="#contact" variant="secondary">
                Hire me
              </Button>
              <Button
                href={resumeLink}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.resume.label}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="pointer-events-none absolute -left-10 top-8 size-40 rounded-full bg-primary/25 blur-3xl md:size-56" />
            <div className="pointer-events-none absolute -right-6 bottom-4 size-36 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/70 p-6 shadow-[var(--shadow-soft)] backdrop-blur-md md:p-8">
              <img
                src={profilePhoto}
                alt={hero.photoAlt}
                width={480}
                height={480}
                className="aspect-square w-full rounded-[1.4rem] object-cover"
                decoding="async"
              />
              <ul className="mt-5 flex flex-wrap gap-2">
                {hero.stackCards.map((label) => (
                  <li key={label}>
                    <span className="inline-flex rounded-full border border-white/10 bg-background/70 px-3 py-1.5 text-xs font-medium text-text-primary">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
