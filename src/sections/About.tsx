import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { site } from '../data/site'

const headingId = 'about-heading'

export function About() {
  return (
    <Section id="about" labelledBy={headingId}>
      <Container>
        <h2
          id={headingId}
          className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
        >
          About
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">
          {site.about}
        </p>
      </Container>
    </Section>
  )
}
