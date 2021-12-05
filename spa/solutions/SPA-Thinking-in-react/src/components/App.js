import React, { useState } from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import NavBar from './NavBar'
import Books from './Books'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div id="page-wrap">
      <Menu
        pageWrapId="page-wrap"
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

    <NavBar toggleMenu={toggleMenu}/>

      <Header title="By React" />

     <Books/>

     <About/>

     <Footer/>
    </div>
  )
}

export default App
