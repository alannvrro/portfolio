import { GraduationCap } from 'lucide-react'
import WordsPullUpMultiStyle, {
  type Segment,
} from '../components/WordsPullUpMultiStyle'
import Reveal from '../components/Reveal'
import { translations } from '../data/content'
import { useApp } from '../context/AppContext'

export default function Education() {
  const { lang } = useApp()
  const t = translations[lang].education

  const headerSegments: Segment[] = [
    { text: t.title[0], className: 'text-primary' },
    { text: t.title[1], className: 'italic font-serif text-faint' },
  ]

  return (
    <section id="formacion" className="bg-bg px-4 py-20 md:px-6 md:py-28">
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

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {t.items.map((item, i) => (
            <Reveal key={`${item.degree}-${i}`} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line/10 bg-surface p-6 transition-colors duration-300 hover:border-primary/20 md:p-8">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-surface2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-primary sm:text-xl">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
                <p className="mt-3 text-xs text-faint sm:text-sm">
                  {item.period}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
