import React from 'react'
import logo from './logo.png'
import './Nav.scss'
import ButtonDownload from '../../buttonDownload/ButtonDownload'



const Nav = () => {
  return (
    <nav className='container nav__container'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <ul className='links'>
            <li className='link-item'><a href="#">Тарифы</a></li>
            <li className='link-item'><a href="#">Proxy</a></li>
            <li className='link-item'><a href="#">FAQ</a></li>
            <li className='link-item'><a href="#">Поддержка</a></li>
        </ul>
        <ButtonDownload/>
    </nav>



 
  )
}

export default Nav