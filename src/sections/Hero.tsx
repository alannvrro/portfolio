import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'
import { profile, socials, navHrefs } from '../data/portfolio'
import { translations } from '../data/content'
import { useApp } from '../context/AppContext'

const HERO_VIDEO = 'https://assets.mixkit.co/videos/45378/45378-720.mp4'

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

const SOCIAL_LINKS = [
  { Icon: Github, href: socials.github, label: 'GitHub' },
  { Icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
  { Icon: Instagram, href: socials.instagram, label: 'Instagram' },
]

export default function Hero() {
  const { lang } = useApp()
  const t = translations[lang]

  return (
    <section id="inicio" className="h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background video */}
        <video
          key={HERO_VIDEO}
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

        {/* Navbar */}
        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-5 md:gap-8 md:rounded-b-3xl md:px-8 lg:gap-12">
            {t.nav.map((label, i) => (
              <a
                key={label}
                href={navHrefs[i]}
                className="whitespace-nowrap text-[10px] transition-colors duration-300 sm:text-xs md:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')
                }
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-4 md:px-8 md:pb-8">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            {/* Left: photo + name + role */}
            <div className="lg:col-span-8">
              {/* Profile photo */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
                className="relative mb-5 h-28 w-28 overflow-hidden rounded-full border border-[#DEDBC8]/30 bg-black/40 backdrop-blur-sm sm:h-32 sm:w-32 md:h-40 md:w-40"
              >
                {/* Placeholder con iniciales (visible si aún no agregas la foto) */}
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-bold text-[#DEDBC8]/60 md:text-5xl">
                  AN
                </span>
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </motion.div>

              <WordsPullUp
                text={profile.shortName}
                className="text-[18vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw]"
              />

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: customEase }}
                className="mt-2 text-sm font-light uppercase tracking-[0.2em] text-[#E1E0CC]/80 sm:text-base md:text-lg"
              >
                {t.hero.role}
              </motion.p>
            </div>

            {/* Right: intro + socials + CTA */}
            <div className="flex flex-col gap-5 lg:col-span-4 lg:pb-2">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: customEase }}
                className="max-w-md text-xs text-[#E1E0CC]/70 sm:text-sm md:text-base"
                style={{ lineHeight: 1.4 }}
              >
                {t.hero.intro}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.75, ease: customEase }}
                className="flex items-center gap-3"
              >
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DEDBC8]/30 text-[#E1E0CC] transition-all duration-300 hover:scale-110 hover:bg-[#DEDBC8] hover:text-black"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </motion.div>

              <motion.a
                href="#contacto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.85, ease: customEase }}
                className="group flex w-fit items-center gap-2 rounded-full bg-[#DEDBC8] py-2 pl-6 pr-2 text-sm font-medium text-black transition-all duration-300 hover:gap-3 sm:text-base"
              >
                {t.hero.cta}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4 text-[#DEDBC8] sm:h-5 sm:w-5" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
