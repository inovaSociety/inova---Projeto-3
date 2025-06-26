import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import timelineElements from './timeLineElements'
import './Style.css'

const ServicesLp = () => {
const workIconStyles = {background: "06D6A)"};

  return (
    <div className='service-p'>
      <h1 className='title-service'>Serviços</h1>

      <VerticalTimeline>
        {/* elementos vão aqui */
          timelineElements.map( element => {
          /* let isWorkIcon = element.icon === 'work' */
          
            return(
              <VerticalTimelineElement
               key={element.key}
               date={element.date}
               dateClassName='date'
               /* iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles} */


               /* esse propiedade icon que ira dizer qual icone ficará dentro na timeline
               
                icon={}
               */ 
              
              >
                    <div className='box-filho-texto'> 
                        <h4>{element.title}</h4>
                        <p>{element.description}</p>
                    </div>
              </VerticalTimelineElement>
            )
          })
        
        
        
        
        
        }
      </VerticalTimeline>
    </div>
  )
}

export default ServicesLp