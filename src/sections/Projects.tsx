import { ExternalLink } from 'lucide-react'

import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { projects } from '../data/projects'
import { publicAssetUrl } from '../lib/publicUrl'

const sectionId = 'work'
const headingId = 'work-heading'

function ProjectDemoGallery({
  title,
  screenshots,
}: {
  title: string
  screenshots: { src: string; alt: string }[]
}) {
  return (
    <div className="-mx-6 -mt-6 mb-4 border-b border-border bg-muted/80">
      <p className="px-4 pt-3 text-xs font-medium uppercase tracking-wide text-text-secondary">
        App demo
      </p>
      <div
        className="flex gap-3 overflow-x-auto overscroll-x-contain px-4 pb-4 pt-2 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]"
        role="region"
        aria-label={`${title} screenshots`}
      >
        {screenshots.map((shot) => (
          <figure
            key={shot.src}
            className="w-[min(12rem,62vw)] shrink-0 snap-center sm:w-36 sm:snap-start"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              <img
                src={publicAssetUrl(shot.src)}
                alt={shot.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[9/16] w-full object-cover object-top"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <Section id={sectionId} labelledBy={headingId} className="bg-muted/40">
      <Container>
        <h2
          id={headingId}
          className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
        >
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          Solo-built Talent Copilot, FinTrack, Volt, and GymFlow — plus production work at
          BookMyShow, District by Zomato, and NBA / WNBA team apps.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex min-w-0 flex-col overflow-hidden bg-muted/60"
            >
              {project.screenshots?.length ? (
                <ProjectDemoGallery
                  title={project.title}
                  screenshots={project.screenshots}
                />
              ) : project.imageSrc ? (
                <div className="-mx-6 -mt-6 mb-4 aspect-video overflow-hidden border-b border-border bg-muted">
                  <img
                    src={publicAssetUrl(project.imageSrc)}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
              <h3 className="text-lg font-semibold text-pretty text-text-primary">
                {project.title}
              </h3>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {project.tech.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border bg-background/70 px-2 py-0.5 text-xs text-text-secondary"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary">
                {project.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.impact ? (
                <p className="mt-4 text-sm font-medium text-pretty text-text-primary">
                  Impact: {project.impact}
                </p>
              ) : null}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {project.linkLabel ?? 'Learn more'}
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
