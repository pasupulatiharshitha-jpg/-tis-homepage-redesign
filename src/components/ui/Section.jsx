import Reveal from '../animation/Reveal'

// Shared wrapper: gives every section the same spacing, width and heading style.
export default function Section({ id, title, intro, tint = false, children }) {
  return (
    <section id={id} className={`scroll-mt-16 py-16 md:py-24 ${tint ? 'bg-card' : ''}`}>
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
