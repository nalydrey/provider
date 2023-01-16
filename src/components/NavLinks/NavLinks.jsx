import React from 'react'
import './NavLinks.scss'

const NavLinks = (props) => {

    const { className } = props

  return (    
    <ul className={className}>
        <li className='link-item'><a href="#">Тарифы</a></li>
        <li className='link-item'><a href="#">Proxy</a></li>
        <li className='link-item'><a href="#">FAQ</a></li>
        <li className='link-item'><a href="#">Поддержка</a></li>
    </ul>
  )
}

export default NavLinks