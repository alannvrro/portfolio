import { useRef, useState } from 'react'
import { useScroll } from 'framer-motion'
import {
  Mail,
  MessageCircle,
  MapPin,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react'
import WordsPullUpMultiStyle, {
  type Segment,
} from '../components/WordsPullUpMultiStyle'
import AnimatedLetter from '../components/AnimatedLetter'
import Reveal from '../components/Reveal'
import { profile, socials } from '../data/portfolio'
import { translations } from '../data/content'
import { useApp } from '../context/AppContext'

const SOCIAL_LINKS = [
  { Icon: Github, href: socials.github, label: 'GitHub' },
  { Icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
  { Icon: Instagram, href: socials.instagram, label: 'Instagram' },
]

export default function Contact() {
  const { lang } = useApp()
  const t = translations[lang].contact

  const introRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ['start 0.85', 'end 0.4'],
  })
  const chars = t.intro.split('')

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const headerSegments: Segment[] = [
    { text: t.title[0], className: 'font-normal' },
    { text: t.title[1], className: 'italic font-serif' },
  ]

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(t.form.subject)
    const body = encodeURIComponent(
      `${t.form.greeting} ${form.name || ''}.\n\n${form.message || ''}\n\n(${
        form.email || ''
      })`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `${t.form.greeting} ${form.name || ''}. ${form.message || ''}`.trim(),
    )
    window.open(`https://wa.me/${profile.whatsapp}?text=${text}`, '_blank')
  }

  return (
    <section id="contacto" className="bg-bg px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl rounded-2xl bg-surface px-6 py-16 md:rounded-[2rem] md:px-12 md:py-20">
        <div className="text-center">
          <Reveal className="mb-6">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
              {t.eyebrow}
            </span>
          </Reveal>
          <WordsPullUpMultiStyle
            key={lang}
            segments={headerSegments}
            className="text-ink text-4xl leading-[0.9] sm:text-5xl md:text-6xl"
          />

          <p
            key={lang}
            ref={introRef}
            className="text-ink mx-auto mt-8 max-w-xl text-sm sm:text-base"
          >
            {chars.map((char, i) => (
              <AnimatedLetter
                key={i}
                char={char}
                index={i}
                totalChars={chars.length}
                progress={scrollYProgress}
              />
            ))}
          </p>
        </div>

        {/* Form */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl">
          <form onSubmit={handleEmail} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder={t.form.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-line/10 bg-bg/40 px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-primary/40"
              />
              <input
                type="email"
                required
                placeholder={t.form.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-xl border border-line/10 bg-bg/40 px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-primary/40"
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder={t.form.message}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="resize-none rounded-xl border border-line/10 bg-bg/40 px-4 py-3 text-sm text-ink placeholder:text-faint outline-none transition-colors focus:border-primary/40"
            />

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-medium text-bg transition-all duration-300 hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                {t.form.sendEmail}
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="group flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/40 py-3 text-sm font-medium text-primary transition-all duration-300 hover:gap-3 hover:bg-primary/10"
              >
                <MessageCircle className="h-4 w-4" />
                {t.form.sendWhatsapp}
              </button>
            </div>
          </form>
        </Reveal>

        {/* Direct contact info */}
        <Reveal
          delay={0.15}
          className="mt-12 flex flex-col items-center gap-6 border-t border-line/10 pt-8"
        >
          <div className="flex flex-col items-center gap-3 text-sm text-muted sm:flex-row sm:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              {profile.email}
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              {profile.phoneDisplay}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {t.location}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-bg"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="mt-2 text-xs text-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
