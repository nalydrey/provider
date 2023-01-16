import React from 'react'
import { SectionWhy } from './sectionWhy/SectionWhy'
import FreeTest from './freeTest/FreeTest'
import Proxy from './proxy/Proxy'
import Cards from './cards/Cards'
import Need from './need/Need'
import Imprint from './imprint/Imprint'
import './Main.scss'


const Main = () => {
  return (
    <main className='main'>
        <SectionWhy/>
        <FreeTest/>
        <Proxy/>
        <Cards/>
        <Need/>
        <Imprint/>
    </main>
  )
}

export default Main