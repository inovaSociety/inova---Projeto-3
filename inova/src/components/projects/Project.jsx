import React from 'react'
import './Style.css'
import Card from './Card'
import Pizaaria from "../../images/projeto-pizzaria.jpg"

const projects = [
    {
        id: 1,
        title: "Pizzaria Landing Page",
        description: "Um bela landing page de uma pizzaria",
        image: Pizaaria,
        tags: ["React", "TailwinndCSS"],
        demoUrl: "#",
        gitHubUrl:"#"
    }
]


const Project = () => {
  return (
    <section>
        <div className='projeto-zero'>
        <h2 className='text-primary'>Futuros <span className='text-secondary'>Projetos</span> </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>Conheça alguns dos nossos projetos mais recentes, desenvolvidos com foco em inovação, usabilidade e performance. Cada solução reflete nosso compromisso com a excelência em design, tecnologia e experiência do usuário.</p>

        <div className='class-projects-cards'>

            {projects.map((project,key) => (
                <div
                    key={key}
                    className='project-card-um'
                >
                    <div className='master-class'>
                        <img src={project.image} alt={project.title} className='project-image'/>
                    </div>
                    <div className='p-6'>
                        <div className='tags-container'> 
                            {project.tags.map((tag) =>(
                                <span className='project-tag'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h3 className='project-title'>{project.title}</h3>
                    <p className='project-description'>{project.description}</p>
                </div>
            ))}


        </div>

        <Card/>
    </div>

    </section>
    
  )
}

export default Project