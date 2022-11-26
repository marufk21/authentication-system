import React from 'react'
import '../App.css'

import { Navbar } from 'flowbite-react'
const NavBar = () => {
  return (
    <>
      <div className="pt-3 pr-4">
        <Navbar className="" fluid={true} rounded={true}>
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center  whitespace-nowrap text-xl font-semibold dark:text-white">
              Navbar
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link className="text-lg" href="/navbars" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link className="text-lg" href="/about">
              About
            </Navbar.Link>
            <Navbar.Link className="text-lg" href="/contact">
              Contact
            </Navbar.Link>
            <Navbar.Link className="text-lg" href="/login">
              Login
            </Navbar.Link>
            <Navbar.Link className="text-lg" href="/signup">
              Register
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  )
}

export default NavBar
