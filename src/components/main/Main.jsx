import React from 'react'
import { SectionWhy } from './sectionWhy/SectionWhy'
import FreeTest from './freeTest/FreeTest'
import Proxy from './proxy/Proxy'
import Cards from './cards/Cards'
import './Main.scss'


const Main = () => {
  return (
    <main className='main'>
        <SectionWhy/>
        <FreeTest/>
        <Proxy/>
        <Cards/>
    </main>
  )
}

export default Main