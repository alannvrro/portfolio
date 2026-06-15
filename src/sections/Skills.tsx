import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Layers, Database } from 'lucide-react'
import WordsPullUpMultiStyle, {
  type Segment,
} from '../components/WordsPullUpMultiStyle'
import Reveal from '../components/Reveal'
import { translations } from '../data/content'
import { useApp } from '../context/AppContext'

const ICONS = [Code2, Layers, Database]

const cardEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Skills() {
  const { lang } = useApp()
  const t = translations[lang].skills

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const headerSegments: Segment[] = [
    { text: t.title[0], className: 'text-primary' },
    { text: t.title[1], className: 'italic font-serif text-faint' },
  ]

  return (
    <section
      id="conocimientos"
      className="relative bg-bg px-4 py-20 md:px-6 md:py-28"
    >
      {/* Subtle noise background */}
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Reveal className="mb-4">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
              {t.eyebrow}
            </span>
          </Reveal>
          <WordsPullUpMultiStyle
            key={lang}
            segments={headerSegments}
            className="!justify-start text-left text-3xl font-normal sm:text-4xl md:text-5xl"
          />
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {t.groups.map((group, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={group.number}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.95, opacity: 0 }
                }
                transition={{ duration: 0.7, delay: i * 0.15, ease: cardEase }}
                className="flex h-full flex-col rounded-2xl bg-surface2 p-6 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs text-faint">{group.number}</span>
                </div>

                <h3 className="mt-5 text-base font-bold text-primary sm:text-lg">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-surface px-3 py-1 text-xs text-muted transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
