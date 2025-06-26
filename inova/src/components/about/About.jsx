import React from 'react'
import Team from './Team'
import './Style.css'
import Faixa from './Faixa'
import CardInovacao from './CardInovacao'


const About = () => {
  return (
    <div className='about'>

      <h1 className='about-title'>Sobre nós</h1>
      <CardInovacao/>
        <Team/>
        <Faixa/>
        
        
    </div>
  )
}

export default About