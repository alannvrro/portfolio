import { AppProvider } from './context/AppContext'
import Controls from './components/Controls'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <AppProvider>
      <Controls />
      <main className="bg-bg">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </AppProvider>
  )
}
