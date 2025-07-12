import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import timelineElements from "./timeLineElements";
import "./Style.css";
import Faixa from "../about/Faixa";



const ServicesLp = () => {
  const workIconStyles = { background: "#06D6A" };
  const schoolIconStyles = { background: "#f9c74f" };

  return (
    < div className="fundo-service">
      <Faixa/>
      <div className="service-p" id="Service">
      <h1 className="title-service">Serviços</h1>

      <VerticalTimeline lineColor="#00ffcc" className="linha-da-timeline">
        {
          /* elementos vão aqui */
          timelineElements.map((element) => {
            const isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="date"
                iconStyle={element.iconStyle}
                icon={element.icon}
                contentStyle={{borderRadius: '1.75rem',background: "rgba(20, 20, 20, 0.9)"
                  
                  
                  
                  
                  
                  
                  
                  
                  ,color:'#fff'}}
                contentArrowStyle={{ borderRight: '7px solid rgb(8, 8, 8)' }}
                
              >
                <div className="box-filho-texto">
                  <h4>{element.title}</h4>
                  <p>{element.description}</p>
                </div>
              </VerticalTimelineElement>
            );
          })
        }
      </VerticalTimeline>
    </div>
    
    </div>
    
  );
};

export default ServicesLp;
