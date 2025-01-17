import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Workexperience from './components/Workexperience'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Workexperience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

