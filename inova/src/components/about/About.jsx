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
      <h2 className='mid_titulo'>O Que nos torna únicos</h2>
      <div className='about-text'>
        <div className='about-text-coluna'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse provident, quis inventore quaerat repellendus, voluptates sed, reprehenderit earum accusamus non debitis labore delectus? Doloribus commodi a tempore praesentium! Exercitationem, reprehenderit?</p>
        </div>
        <div className='about-text-coluna coluna-com-linha'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatibus neque facilis esse magni porro provident eos cupiditate sequi autem? Provident ex dignissimos tempora beatae labore asperiores tenetur vero maiores?</p>
        </div>
      </div>
        <Team/>
        <Faixa/>
        
        
    </div>
  )
}

export default About