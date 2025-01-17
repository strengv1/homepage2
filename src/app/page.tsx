import Hero from './__components/Hero'
import Skills from './__components/Skills'
import Projects from './__components/Projects'
import Contact from './__components/Contact'
import Footer from './__components/Footer'
import Workexperience from './__components/Workexperience'

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

