import React from 'react'
import './Nav.css'

import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='container'>
      <nav>
        <NavLink exact to={"/"}>Profile </NavLink>
        <NavLink to={"/proyects"}>Proyects </NavLink>
        <NavLink to={"/contact"}>Contact </NavLink>
      </nav>
    </header>
  )
}

export default Nav