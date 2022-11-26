import React from 'react'

import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Error from './Components/Error';

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Signup />
      <Login />
      <Contact />
      <Error/>
      <About />
    </>
  )
}

export default App
