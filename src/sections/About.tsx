import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { site } from '../data/site'

const headingId = 'about-heading'

export function About() {
  return (
    <Section id="about" labelledBy={headingId}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            id={headingId}
            kicker="About"
            title="I ship mobile that holds up in production"
          />
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            {site.about}
          </p>
        </div>
      </Container>
    </Section>
  )
}
