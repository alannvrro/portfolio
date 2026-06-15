import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  y = 20,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
