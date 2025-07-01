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
    <>
      <div className="service-p">
      <h1 className="title-service">Serviços</h1>

      <VerticalTimeline>
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
    <Faixa/>
    </>
    
  );
};

export default ServicesLp;
