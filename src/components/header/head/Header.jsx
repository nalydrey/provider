import React from 'react'
import monitor from '../head/monitor.png'
import './Header.scss'
import ButtonUpload from '../../buttonUpload/ButtonUpload'

const Header = () => {
  return (
    <div className='container header__container'>
      {/* <div className='header__overflov'> */}
        <div className='header__discription'>
            <h1><span className='detect'>Антидетект</span> Браузер <span className='upper'>MULTIACCOUNT</span></h1>
            <p>Неограниченое кол-во профилей без бана!</p>
            <ButtonUpload/>
            <p>Лучшая защита от отслеживаний на сайтах</p>
        </div>
        <div className='img__wrap'>
           <img src={monitor} alt="monitor" />
        </div>
      {/* </div> */}

    </div>
  )
}

export default Header



