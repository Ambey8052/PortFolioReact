import { useState } from 'react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import AboutPage from './Components/AboutPage'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Home />
      <AboutPage />
      <Skills />
       <Projects />
       <Contact />
    </BrowserRouter>
   
  )
}

export default App