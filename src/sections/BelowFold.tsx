import { About } from './About'
import { Contact } from './Contact'
import { Experience } from './Experience'
import { Lifecycle } from './Lifecycle'
import { NextProjectCTA } from './NextProjectCTA'
import { Projects } from './Projects'
import { Services } from './Services'
import { TechnicalSkills } from './TechnicalSkills'
import { TrustBar } from './TrustBar'

export default function BelowFold() {
  return (
    <>
      <TrustBar />
      <TechnicalSkills />
      <Lifecycle />
      <Projects />
      <Services />
      <Experience />
      <NextProjectCTA />
      <About />
      <Contact />
    </>
  )
}
