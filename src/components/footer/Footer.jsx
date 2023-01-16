import React from 'react'
import Container from '../container/Container'
import NavLinks from '../NavLinks/NavLinks'
import logo from '../../icons/logo.png'
import ButtonUpload from '../buttonUpload/ButtonUpload'
import ButtonDownload from '../buttonDownload/ButtonDownload'
import egg from './egg2.png'
import './Footer.scss'


const Footer = () => {
  return (
    <Container name='footer'>
        <div className='footer__logo'>
            <img src={logo} alt="logo" />
        </div>
        <h3>Меню</h3>
        <nav>
            <NavLinks className='links__footer'/>
        </nav>
        <div className='footer__buttons'>
            <ButtonUpload/>
            <ButtonDownload/>
        </div>
        <div className='egg__wrap'>
            <img src={egg} alt="egg" />
        </div>

    </Container>
  )
}

export default Footer