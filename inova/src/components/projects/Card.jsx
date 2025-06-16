import React from 'react'
import './Style.css'
import Pizaaria from "../../images/projeto-pizzaria.jpg"

const Card = () => {
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


  return (
    <div>Card inicial
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
        
    </div>
  )
}

export default Card