import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='md:px-[100px] px-12 h-full w-full overflow-y-hidden'>

      <header>
        <Navbar/>
      </header>

      <section>
        <Hero/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
      </section>

      <footer>
        <Footer/>
      </footer>

    </main>
  )
}

export default App