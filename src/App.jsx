import Header from './components/Header/Header'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Experience from './components/Sections/Experience'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Education from './components/Sections/Education'
import Contact from './components/Sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App