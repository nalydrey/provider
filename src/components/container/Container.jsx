import React  from 'react'
import './Container.scss'

const Container = (props) => {

    const { children, name } = props

  return (
    <section className={name}>
      <div className={`little__container ${name}__container`}>
        {children}
      </div>
    </section>
  )
}

export default Container