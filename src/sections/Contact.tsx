import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'
import { resumeHref } from '../lib/publicUrl'

const headingId = 'contact-heading'

export function Contact() {
  const mailto = `mailto:${site.email}`
  const resumeLink = resumeHref(site.resume.href)

  return (
    <Section id="contact" labelledBy={headingId} className="bg-muted/40 pb-24">
      <Container>
        <h2
          id={headingId}
          className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
        >
          Contact
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          {site.contact.heading}
        </p>
        <p className="mt-8">
          <a
            href={mailto}
            className="text-xl font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {site.email}
          </a>
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={mailto} variant="primary">
            Email me
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
      </Container>
    </Section>
  )
}
