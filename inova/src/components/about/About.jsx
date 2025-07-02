import React from 'react'
import Team from './Team'
import './Style.css'
import Faixa from './Faixa'
import CardInovacao from './CardInovacao'
import Faixa02 from './Faixa02'



const About = () => {
  return (
    <div className='about' id='About'>

      
      <CardInovacao/>
      <h2 className='mid_titulo'>O  que nos faz únicos</h2>
      <div className='about-text'>
        <div className='about-text-coluna'>
          <p>Na InovaSociety, somos seus parceiros em tecnologia. Com uma equipe multidisciplinar, entregamos soluções tech completas e de alta performance, desde sistemas robustos de back-end até interfaces front-end modernas. Nossa expertise em WordPress e React garante sites dinâmicos e funcionais, sempre com transparência total em cada etapa do projeto e suporte contínuo para que você alcance resultados mensuráveis e impulsionadores para o seu negócio.</p>
        </div>
        <div className='about-text-coluna coluna-com-linha'>
          <p>Valorizamos sua visão e o poder transformador dela. É a partir daí que criamos experiências digitais memoráveis, sempre com a experiência do usuário (UX) como prioridade inegociável.

          Nossa equipe desenvolve soluções que não só funcionam, mas encantam. Seja em projetos WordPress ou React, garantimos facilidade de uso e satisfação total. Nosso compromisso? Uma relação de confiança duradoura, com comunicação clara e feedback constante, assegurando uma jornada digital e resultados impecáveis para você.</p>
        </div>
      </div>
        <Team/>
        <Faixa02/>
        
    </div>
  )
}

export default About