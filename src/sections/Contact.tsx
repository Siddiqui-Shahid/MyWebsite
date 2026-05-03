import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'

const headingId = 'contact-heading'

export function Contact() {
  const mailto = `mailto:${site.email}`

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
        <div className="mt-8">
          <Button href={mailto} variant="primary">
            Email me
          </Button>
        </div>
      </Container>
    </Section>
  )
}
