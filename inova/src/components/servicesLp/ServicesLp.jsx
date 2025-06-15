import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import timelineElements from './timeLineElements'

const ServicesLp = () => {
const workIconStyles = {background: "06D6A)"};

  return (
    <div>
      <h1>Serviços</h1>

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
                <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                <p id='description' >{element.description}</p>

              </VerticalTimelineElement>
            )
          })
        
        
        
        
        
        }
      </VerticalTimeline>
    </div>
  )
}

export default ServicesLp