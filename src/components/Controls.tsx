import { Sun, Moon, Languages } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Controls() {
  const { theme, lang, toggleTheme, toggleLang } = useApp()

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
      <button
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-[#E1E0CC] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-black/60"
      >
        {theme === 'dark' ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </button>

      <button
        onClick={toggleLang}
        aria-label="Cambiar idioma"
        className="flex h-10 items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 text-[#E1E0CC] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/60"
      >
        <Languages className="h-4 w-4" />
        <span className="text-xs font-medium uppercase">
          {lang === 'es' ? 'EN' : 'ES'}
        </span>
      </button>
    </div>
  )
}
