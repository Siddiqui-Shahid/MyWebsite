import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { site } from '../data/site'
import { resumeHref } from '../lib/publicUrl'

const headingId = 'contact-heading'

export function Contact() {
  const mailto = `mailto:${site.email}?subject=iOS%20/%20Flutter%20role`
  const resumeLink = resumeHref(site.resume.href)

  return (
    <Section id="contact" labelledBy={headingId} className="bg-muted/30 pb-28">
      <Container>
        <SectionHeading
          id={headingId}
          kicker="Contact"
          title="Let’s talk iOS or Flutter"
          description={site.contact.heading}
        />
        <a
          href={mailto}
          className="mt-10 block text-2xl font-semibold tracking-tight text-text-primary underline-offset-4 hover:text-primary hover:underline md:text-4xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {site.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-3">
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
          <Button
            href={site.linkedin}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
          <Button
            href={site.github}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </div>
      </Container>
    </Section>
  )
}
