import React from 'react'
import {VerticalTimeLine, VertimeLineElement} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

  const services = [
    {
      id: 1,
      title: "UI DESIGN",
      icon: <div className="service-icon ui-icon">🔮</div>, 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."
    },
    {
      id: 2,
      title: "DESENVOLVIMENTO",
      icon: <div className="service-icon dev-icon">💻</div>, 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."
    },
    {
      id: 3,
      title: "SEO",
      icon: <div className="service-icon seo-icon">🌐</div>, 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."
    }
  ];


const ServicesLp = () => {
  return (
    <div>
        <h1>Serviços</h1>

        <VerticalTimeLine>
          services.map()
        </VerticalTimeLine>
    </div>
  )
}

export default ServicesLp