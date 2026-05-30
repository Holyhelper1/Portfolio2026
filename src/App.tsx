import { LanguageProvider } from './i18n'
import { Header } from './components/portfolio/Header/Header'
import { Hero } from './components/portfolio/Hero/Hero'
import { About } from './components/portfolio/About/About'
import { Projects } from './components/portfolio/Projects/Projects'
import { TechStack } from './components/portfolio/TechStack/TechStack'
import { Footer } from './components/portfolio/Footer/Footer'
import { ThemeInitializer } from './components/portfolio/ThemeInitializer'
import styles from './App.module.css'

function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <LanguageProvider>
      <ThemeInitializer />
      <div className={styles.app}>
        <Header onNavigate={handleNavigate} />
        <main className={styles.main}>
          <Hero onNavigate={handleNavigate} />
          <About />
          <Projects />
          <TechStack />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
