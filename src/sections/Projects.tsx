import { ExternalLink } from 'lucide-react'

import { Card } from '../components/ui/Card'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { projects } from '../data/projects'

const sectionId = 'work'
const headingId = 'work-heading'

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
          Selected shipping work — BookMyShow, District by Zomato, NBA and WNBA team
          apps, integrations, and releases at scale.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col bg-muted/60">
              {project.imageSrc ? (
                <div className="-mx-6 -mt-6 mb-4 aspect-video overflow-hidden rounded-t-2xl border-b border-border bg-muted">
                  <img
                    src={project.imageSrc}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
              <h3 className="text-lg font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {project.tech.join(' · ')}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary">
                {project.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.impact ? (
                <p className="mt-4 text-sm font-medium text-text-primary">
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
