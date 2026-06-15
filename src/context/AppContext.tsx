import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Theme = 'dark' | 'light'
export type Lang = 'es' | 'en'

interface AppContextValue {
  theme: Theme
  lang: Lang
  toggleTheme: () => void
  toggleLang: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

function getInitial<T extends string>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  return (localStorage.getItem(key) as T) || fallback
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitial('theme', 'dark'))
  const [lang, setLang] = useState<Lang>(() => getInitial('lang', 'es'))

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  const value: AppContextValue = {
    theme,
    lang,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    toggleLang: () => setLang((l) => (l === 'es' ? 'en' : 'es')),
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp debe usarse dentro de <AppProvider>')
  return ctx
}
