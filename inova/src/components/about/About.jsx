import React from 'react'
import Team from './Team'
import './Style.css'


const About = () => {
  return (
    <div>
        <h1>Sobre nós</h1>
        <div>
          <h1> Vamos trabalhar juntos </h1>
          <h4> Entre em contato com nossos especialistas para analisar sua <br />
            ideia ou produto e discutir opções para a melhor abordagem</h4>
            <a href="" className='b-teste'>Entre em contato</a>
        </div>
        <Team/>
    </div>
  )
}

export default About