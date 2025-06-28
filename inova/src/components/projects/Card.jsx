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
      },
      {
          id: 2,
          title: "Pizzaria Landing Page",
          description: "Um bela landing page de uma pizzaria",
          image: Pizaaria,
          tags: ["React", "TailwinndCSS"],
          demoUrl: "#",
          gitHubUrl:"#"
      },
      {
          id: 3,
          title: "Pizzaria Landing Page",
          description: "Um bela landing page de uma pizzaria",
          image: Pizaaria,
          tags: ["React", "TailwinndCSS"],
          demoUrl: "#",
          gitHubUrl:"#"
      },
      {
          id: 4,
          title: "Pizzaria Landing Page",
          description: "Um bela landing page de uma pizzaria",
          image: Pizaaria,
          tags: ["React", "TailwinndCSS"],
          demoUrl: "#",
          gitHubUrl:"#"
      },
  ]


  return (
    <div>
      <div className='class-projects-cards'>

            {projects.map((project,key) => (
                <div
                    key={project.id}
                    className='bg-[#f9f9f9] rounded-md shadow-sm transition-transform duration-200 max-w-sm mx-auto hover:-translate-y-1 project-card-um'
                >
                    <div className='master-class'>
                        <img src={project.image} alt={project.title} className='project-image'/>
                    </div>
                    <div className='p-6'>
                        <div className='tags-container'> 
                            {project.tags.map((tag) =>(
                                <span className='py-1 px-2 text-xs font-medium rounded-full bg-[#e2e8f0] text-[#1a202c] border-2 border-[#8f0]'>
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