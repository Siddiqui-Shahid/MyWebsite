import { ExternalLink } from 'lucide-react'

import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { cn } from '../lib/cn'
import { projects } from '../data/projects'
import { publicAssetUrl } from '../lib/publicUrl'

const sectionId = 'work'
const headingId = 'work-heading'

function Phone({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[1.35rem] border-[3px] border-white/18 bg-black p-1 shadow-[var(--shadow-soft)]',
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="aspect-[9/19] w-full rounded-[1.05rem] object-cover object-top"
      />
    </div>
  )
}

function ProjectDemoGallery({
  title,
  screenshots,
  featured,
}: {
  title: string
  screenshots: { src: string; alt: string }[]
  featured?: boolean
}) {
  if (featured) {
    const shots = screenshots.slice(0, 3)
    return (
      <div className="flex items-end justify-center gap-3 px-2 pb-2 pt-4 md:gap-4">
        {shots.map((shot, i) => (
          <Phone
            key={shot.src}
            src={publicAssetUrl(shot.src)}
            alt={shot.alt}
            className={cn(
              'w-[30%] max-w-36',
              i === 1 && 'w-[34%] max-w-40 -translate-y-3',
            )}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="-mx-6 -mt-6 mb-5 border-b border-border bg-black/25">
      <p className="px-5 pt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-text-secondary">
        {title} demo
      </p>
      <div
        className="flex gap-3 overflow-x-auto overscroll-x-contain px-5 pb-5 pt-3 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]"
        role="region"
        aria-label={`${title} screenshots`}
      >
        {screenshots.map((shot) => (
          <figure key={shot.src} className="w-[min(9.5rem,58vw)] shrink-0 snap-center">
            <Phone src={publicAssetUrl(shot.src)} alt={shot.alt} />
          </figure>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <Section id={sectionId} labelledBy={headingId}>
      <Container>
        <SectionHeading
          id={headingId}
          kicker="Selected work"
          title="Shipped on the App Store — and products I built myself"
          description="Production iOS at BookMyShow, District, and NBA / WNBA apps. Flutter products with store-ready release hygiene."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={cn(
                'flex min-w-0 flex-col overflow-hidden bg-muted/50',
                project.featured && 'md:col-span-2 md:grid md:grid-cols-2 md:gap-8',
              )}
            >
              {project.screenshots?.length ? (
                <ProjectDemoGallery
                  title={project.title}
                  screenshots={project.screenshots}
                  featured={project.featured}
                />
              ) : project.featured ? (
                <div className="flex min-h-52 items-center justify-center rounded-2xl bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent_70%)] md:min-h-full">
                  <p className="text-6xl font-semibold tracking-tight text-primary/80 md:text-7xl">
                    30L+
                  </p>
                </div>
              ) : null}

              <div className={cn(project.featured && project.screenshots ? 'md:py-4' : '')}>
                {project.featured ? (
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    Featured
                  </p>
                ) : null}
                <h3
                  className={cn(
                    'text-pretty font-semibold text-text-primary',
                    project.featured ? 'mt-2 text-2xl md:text-3xl' : 'text-lg',
                  )}
                >
                  {project.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/8 bg-background/50 px-2.5 py-0.5 text-[0.7rem] text-text-secondary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-secondary">
                  {project.bullets.slice(0, project.featured ? 3 : 2).map((item) => (
                    <li key={item} className="border-l border-primary/30 pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
                {project.impact ? (
                  <p className="mt-4 text-sm font-medium text-pretty text-text-primary">
                    {project.impact}
                  </p>
                ) : null}
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {project.linkLabel ?? 'Learn more'}
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
