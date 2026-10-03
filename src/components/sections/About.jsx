import { history } from '../../data/content'
import Reveal from '../animation/Reveal'
import Section from '../ui/Section'

export default function About() {
  return (
    <Section id="about" title="The Modern Gurukul">
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal className="space-y-4 text-muted">
          <p>
            Tula's International School was established in 2012 under the aegis of Rishabh
            Educational Trust, to impart education through seamless opportunities.
          </p>
          <p>
            Following the Modern Gurukul concept, it is a co-ed residential school: a blend of the
            old Gurukul system and a modern approach that aims to develop Mind, Body and Soul.
          </p>
          <p>
            It was one of the few co-educational, vegetarian boarding schools of its time, built on
            compassion, sustainability and respect for nature.
          </p>
        </Reveal>

        <ol className="space-y-8 border-l-2 border-accent pl-6">
          {history.map((item, index) => (
            <li key={item.year}>
              <Reveal delay={index * 0.1}>
                <p className="font-display text-2xl font-semibold text-brand">{item.year}</p>
                <p className="mt-1 text-muted">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
