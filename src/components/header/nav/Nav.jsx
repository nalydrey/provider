import React from 'react'
import logo from '../../../icons/logo.png'
import './Nav.scss'
import ButtonDownload from '../../buttonDownload/ButtonDownload'
import NavLinks from '../../NavLinks/NavLinks'



const Nav = () => {


  return (
    <nav className='container nav__container'>
        <div className='logo'>
            <a href=""><img src={logo} alt="logo" /></a>
        </div>
        <NavLinks className='links__head'/>
        <ButtonDownload/>
    </nav>



 
  )
}

export default Nav