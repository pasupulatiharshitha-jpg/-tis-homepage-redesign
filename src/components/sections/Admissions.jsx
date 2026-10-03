import { ArrowRight } from 'lucide-react'
import { admissionSteps, school } from '../../data/content'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'
import Section from '../ui/Section'

export default function Admissions() {
  return (
    <Section
      id="admissions"
      title="Admissions are open for 2026-27"
      intro="Applications are invited for Classes IV to IX and Class XI."
      tint
    >
      <ol className="grid gap-8 md:grid-cols-3">
        {admissionSteps.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={index * 0.1}>
              <p className="font-display text-4xl font-semibold text-accent">{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-muted">{step.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
        <Button href={school.admissionUrl} target="_blank" rel="noopener noreferrer">
          Admission procedure <ArrowRight size={16} />
        </Button>
        <Button href={school.feeUrl} variant="outline" target="_blank" rel="noopener noreferrer">
          Fee structure
        </Button>
      </Reveal>
    </Section>
  )
}
