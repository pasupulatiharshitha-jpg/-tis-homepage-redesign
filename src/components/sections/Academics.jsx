import { houses } from '../../data/content'
import Reveal from '../animation/Reveal'
import Section from '../ui/Section'

export default function Academics() {
  return (
    <Section
      id="academics"
      title="Learning and life on campus"
      intro="Small classes, a CBSE curriculum and a house system that gives every student a team to belong to."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <h3 className="text-lg font-semibold">Academics</h3>
          <ul className="mt-3 space-y-2 text-muted">
            <li>CBSE curriculum for Grades IV to XII</li>
            <li>An average class size of about 20 students</li>
            <li>Tests that help children make the right subject choices</li>
            <li>Basketball, football, table tennis and lawn tennis on campus</li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-lg font-semibold">Our houses</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {houses.map((house) => (
              <li key={house} className="rounded-full border border-brand px-4 py-1.5 text-sm text-brand">
                {house}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
