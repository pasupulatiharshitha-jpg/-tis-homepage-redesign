import useTheme from './hooks/useTheme'
import ScrollProgress from './components/animation/ScrollProgress'
import Cursor from './components/animation/Cursor'
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Recognition from './components/sections/Recognition'
import Academics from './components/sections/Academics'
import Admissions from './components/sections/Admissions'
import Footer from './components/sections/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Recognition />
        <Academics />
        <Admissions />
      </main>
      <Footer />
    </>
  )
}
