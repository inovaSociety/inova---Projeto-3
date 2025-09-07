import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import timelineElements from "./timeLineElements";
import "./Style.css";
import Faixa from "../about/Faixa";
import Team from "../about/Team";
import ServicesCarousel from "./ServicesCarousel";



const ServicesLp = () => {
  const workIconStyles = { background: "#06D6A" };
  const schoolIconStyles = { background: "#f9c74f" };

  return (
    < div className="fundo-service">
      <div className="services-container">

        <div className="services-text">
          <span className="nomeM"><h2>SERVIÇOS</h2></span>
          
          <div className="texto-formt">
            <h3>Transformamos ideias em soluções digitais</h3>
          <p>
            Criamos softwares sob medida para impulsionar empresas e startups. 
            Nossos serviços vão do desenvolvimento de sistemas robustos até
            soluções em nuvem, sempre com foco em inovação, qualidade e resultados
            reais para o seu negócio.
          </p>
          </div>
          
        </div>
         <div className="services-slider">
            <ServicesCarousel/>
          </div>

      </div>
    
    </div>
    
  );
};

export default ServicesLp;
