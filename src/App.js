import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import AboutMe from './AboutMe/AboutMe'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Courses from './Courses/Courses'

const App = () => {
  return (
    <div className='Main'>
      <Navbar />
      <div className='HomePage'>
        <Home />
        <AboutMe />
        <Education/>
        <Experience/>
        <Skills/>
        <Courses/>
        <Contact/>
      </div>
    </div>
  )
}

export default App