import React from 'react'
import Container from '../../container/Container'
import Item from './item/Item'
import './Need.scss'
import need from '../../../data/dataIcons'

const Need = () => {
  return (
    <Container name='need'>
        <h2>Для чего нужен браузер Multiaccount</h2>
        <div className='need__box'>
            {need.map((elem,i)=><Item data={elem} key={i}/>)}
        </div>
    </Container>
  )
}

export default Need