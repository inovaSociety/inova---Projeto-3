import React from 'react'
import './Style.css'
import Pizaaria from "../../images/projeto-pizzaria.jpg"
import GitHub from "../../images/github.png"
import LinkImg from "../../images/link.png"
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 class-projects-cards'>

            {projects.map((project,key) => (
                <div
                    key={project.id}
                    className='group bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'
                >
                    <div className='h-48 overflow-hidden'>
                        <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                    </div>
                    <div className='p-6'>
                        <div className='flex flex-wrap gap-2 mb-1'> 
                            {project.tags.map((tag) =>(
                                <span className='py-1 px-2 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border '>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h3 className='text-xl font-semibold mb-1 text-center'>{project.title}</h3>
                    <p className='text-muted-foreground text-sm mb-4 text-center'>{project.description}</p>
                    <div className='flex justify-start px-4 pb-4 mt-2 space-x-2'>
                        
                                <a href={project.demoUrl} className='hover:scale-110 transition-transform duration-300 '
                                >
                                    <img src={LinkImg} alt="link" width={20} className='hover:brightness-125' />
                                </a>
                                <a  href={project.gitHubUrl} className='hover:scale-110 transition-transform duration-300 '
                                
                                >
                                    <img src={GitHub} alt="github" width={20} className='hover:brightness-125' />

                                </a>
                        

                    </div>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Card