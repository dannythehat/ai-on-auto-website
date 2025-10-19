import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <TechStack />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}