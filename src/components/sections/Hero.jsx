import { motion } from 'framer-motion'
import { quickFacts } from '../../data/content'
import Button from '../ui/Button'

// Simple sunrise-over-the-hills drawing made with SVG shapes (no image files needed).
function ValleyScene() {
  return (
    <svg
      viewBox="0 0 400 440"
      className="h-full w-full"
      role="img"
      aria-label="Sun rising over the green hills of the Doon Valley"
    >
      <rect width="400" height="440" fill="#fbd9a8" />
      <circle cx="270" cy="170" r="70" fill="#e86f12" />
      <path d="M0 300 Q90 220 200 280 T400 250 V440 H0Z" fill="#7db896" />
      <path d="M0 350 Q110 270 230 340 T400 320 V440 H0Z" fill="#3e8a62" />
      <path d="M0 400 Q130 340 260 395 T400 380 V440 H0Z" fill="#1f5b3f" />
    </svg>
  )
}

export default function Hero() {
  return (
    <>
      <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-12 md:grid-cols-2 md:pt-20">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            A Modern Gurukul in the Doon Valley
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="mt-5 max-w-lg text-lg text-muted"
          >
            A co-educational residential school that blends the old Gurukul system with a modern
            approach, to develop Mind, Body and Soul.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="#admissions">Admissions open for 2026-27</Button>
            <Button href="#about" variant="outline">
              Read our story
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="aspect-[4/4.4] overflow-hidden rounded-3xl"
        >
          <ValleyScene />
        </motion.div>
      </section>

      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 border-t border-line px-5 py-8 md:grid-cols-4">
        {quickFacts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-display text-2xl font-semibold text-brand">{fact.value}</dt>
            <dd className="mt-1 text-sm text-muted">{fact.label}</dd>
          </div>
        ))}
      </dl>
    </>
  )
}
