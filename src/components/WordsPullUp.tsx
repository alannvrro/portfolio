import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  /** Adds a superscript "*" after the last "a" of the final word. */
  showAsterisk?: boolean
  /** Stagger delay between words, in seconds. */
  stagger?: number
}

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export default function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  stagger = 0.08,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })

  const words = text.split(' ')

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1

        return (
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
            className="relative inline-block whitespace-pre"
          >
            {isLast && showAsterisk ? (
              <span className="relative inline-block">
                {word}
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                  *
                </span>
              </span>
            ) : (
              word
            )}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        )
      })}
    </div>
  )
}
