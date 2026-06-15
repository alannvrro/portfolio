import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, FolderGit2 } from 'lucide-react'
import WordsPullUpMultiStyle, {
  type Segment,
} from '../components/WordsPullUpMultiStyle'
import Reveal from '../components/Reveal'
import { translations } from '../data/content'
import { useApp } from '../context/AppContext'

const cardEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Projects() {
  const { lang } = useApp()
  const t = translations[lang].projects

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const headerSegments: Segment[] = [
    { text: t.title[0], className: 'text-primary' },
    { text: t.title[1], className: 'italic font-serif text-faint' },
  ]

  return (
    <section id="proyectos" className="bg-bg px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
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
          {t.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
              }
              transition={{ duration: 0.7, delay: i * 0.15, ease: cardEase }}
              className="group flex h-72 flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-line/15 bg-surface p-6 transition-colors duration-300 hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface2 text-primary/70">
                  <FolderGit2 className="h-5 w-5" />
                </span>
                <span className="text-xs uppercase tracking-widest text-faint">
                  0{i + 1}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary/80 sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-faint sm:text-sm">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="rounded-full border border-line/15 px-3 py-1 text-xs text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-faint sm:text-sm">
                  {t.cta}
                  <ArrowRight className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
