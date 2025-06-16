import React from 'react'
import './Style.css'
import Card from './Card'



const Project = () => {
  return (
    <section>
        <div className='projeto-zero'>
        <h2 className='text-primary'>Futuros <span className='text-secondary'>Projetos</span> </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>Conheça alguns dos nossos projetos mais recentes, desenvolvidos com foco em inovação, usabilidade e performance. Cada solução reflete nosso compromisso com a excelência em design, tecnologia e experiência do usuário.</p>

        <Card/>
    </div>

    </section>
    
  )
}

export default Project