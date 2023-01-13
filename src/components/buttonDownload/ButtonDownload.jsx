import React from 'react'
import './ButtonDownload.scss'
import {ReactComponent as Arrow} from '../buttonDownload/downloadArrow.svg'

const ButtonDownload = () => {
  return (
    <button className='download'>
        <span>Скачать</span> 
        <Arrow className='download__arrow'/>
    </button>
  )
}

export default ButtonDownload