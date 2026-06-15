import { Briefcase, Check } from 'lucide-react'
import WordsPullUpMultiStyle, {
  type Segment,
} from '../components/WordsPullUpMultiStyle'
import Reveal from '../components/Reveal'
import { translations } from '../data/content'
import { useApp } from '../context/AppContext'

export default function Experience() {
  const { lang } = useApp()
  const t = translations[lang].experience

  const headerSegments: Segment[] = [
    { text: t.title[0], className: 'text-primary' },
    { text: t.title[1], className: 'italic font-serif text-faint' },
  ]

  return (
    <section id="experiencia" className="bg-bg px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
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

        {/* Timeline */}
        <div className="flex flex-col gap-3">
          {t.jobs.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.1}>
              <div className="rounded-2xl border border-line/10 bg-surface p-6 transition-colors duration-300 hover:border-primary/20 md:p-8">
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface2 text-primary">
                      <Briefcase className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-primary sm:text-xl">
                        {job.role}
                      </h3>
                      <p className="text-sm text-muted">{job.company}</p>
                    </div>
                  </div>
                  <span className="ml-12 mt-1 text-xs text-faint md:ml-0 md:text-sm">
                    {job.period}
                  </span>
                </div>

                <ul className="ml-12 mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-xs text-muted sm:text-sm">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
