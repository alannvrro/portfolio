import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
  /** Stagger delay between words, in seconds. */
  stagger?: number
}

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export default function WordsPullUpMultiStyle({
  segments,
  className = '',
  stagger = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })

  // Flatten all segments into individual words, preserving per-word className.
  const words = segments.flatMap((segment) =>
    segment.text
      .split(' ')
      .filter((w) => w.length > 0)
      .map((word) => ({ word, className: segment.className ?? '' })),
  )

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map(({ word, className: wordClassName }, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{
            duration: 0.6,
            delay: i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block whitespace-pre ${wordClassName}`}
        >
          {word}{' '}
        </motion.span>
      ))}
    </div>
  )
}
