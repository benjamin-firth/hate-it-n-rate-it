import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <NavLink className='button' to='/login'> Sign In </NavLink>
    </div>
  )
}

export default NavBar;