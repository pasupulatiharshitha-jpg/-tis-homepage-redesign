import { recognition } from '../../data/content'
import Reveal from '../animation/Reveal'
import Section from '../ui/Section'

export default function Recognition() {
  return (
    <Section id="recognition" title="Recognised across India" tint>
      <ul className="divide-y divide-line border-y border-line">
        {recognition.map((item, index) => (
          <li key={item.title + item.year}>
            <Reveal delay={index * 0.08} className="grid gap-1 py-5 sm:grid-cols-[6rem_1fr] sm:gap-6">
              <p className="font-display text-xl font-semibold text-accent">{item.year}</p>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted">{item.source}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
