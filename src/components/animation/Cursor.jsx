import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// A ring that follows the mouse and grows over links and buttons.
// Hidden on touch screens through CSS (see .cursor-ring in index.css).
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const smoothX = useSpring(x, { stiffness: 500, damping: 40 })
  const smoothY = useSpring(y, { stiffness: 500, damping: 40 })
  const [overLink, setOverLink] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onOver = (e) => setOverLink(Boolean(e.target.closest('a, button')))

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: smoothX, y: smoothY }}
      className="cursor-ring pointer-events-none fixed left-0 top-0 z-[70]"
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent"
        animate={{
          width: overLink ? 56 : 28,
          height: overLink ? 56 : 28,
          opacity: overLink ? 0.9 : 0.7,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}
