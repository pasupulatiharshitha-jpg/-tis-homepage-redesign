import { motion, useScroll, useSpring } from 'framer-motion'

// A thin bar at the top that fills as the page is scrolled.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll() // goes from 0 to 1 while scrolling
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-accent"
    />
  )
}
