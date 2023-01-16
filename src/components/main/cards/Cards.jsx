import React from 'react'
import Card from '../card/Card'
import egg from './egg1.png'
import eg from './egg2.png'
import cardInfo from '../../../data/dataCard'
import './Cards.scss'

const Cards = () => {
  return (
    <section className='tariff'>
        <div className="container tariff__container">
            <div className='eggs'>
                <img className='egg' src={egg} alt="egg" />
                <img className='egg2' src={eg} alt="eg" />
            </div>
            <h2>Тарифы</h2>
            <p>Тест на 24 часа бесплатно при регестрации в браузере</p>
            <div className='cardBox'>
              {cardInfo.map((card, i)=><Card data={card} key={i}/>)}
            </div>
        </div>
    </section>
    
  )
}

export default Cards