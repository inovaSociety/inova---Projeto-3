import React from 'react'
import './Style.css'
import Card from './Card'



const Project = () => {
  return (
    <section className='py-24 px-4 relative '>
        <div className='projeto-zero'>
        <h2 className='text-[30px] font-bold mb-4 text-center'>Futuros <span className='text-secondary'>Projetos</span> </h2>
        <p className='text-center text-[#6c757d] text-muted-foreground mb-12 max-w-2xl mx-auto'>Conheça alguns dos nossos projetos mais recentes, desenvolvidos com foco em inovação, usabilidade e performance. Cada solução reflete nosso compromisso com a excelência em design, tecnologia e experiência do usuário.</p>

        <Card/>
        <div className='text-center mt-6'>
                    <a href="" className='inline-block bg-blue-800 text-white px-6 py-3 rounded-md text-base font-semibold border-2 border-blue-800 hover:bg-white hover:text-blue-800 transition'>Conheça os projetos</a>
        </div>
    </div>

    </section>
    
  )
}

export default Project