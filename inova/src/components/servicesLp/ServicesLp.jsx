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
      <div className="services-container">
        {/* Texto da esquerda */}
        <div className="services-text">
          <h2>SERVIÇOS</h2>
          <h3>Transformamos ideias em soluções digitais</h3>
          <p>
            Criamos softwares sob medida para impulsionar empresas e startups.
            Nossos serviços vão do desenvolvimento de sistemas robustos até
            soluções em nuvem, sempre com foco em inovação, qualidade e resultados
            reais para o seu negócio.
          </p>
        </div>

        {/* Cards de serviços */}
        <div className="services-cards">
          <div className="card">
            <h4>Desenvolvimento de Sistemas</h4>
            <p>
              Construímos sistemas personalizados que atendem às necessidades
              específicas da sua empresa. Garantimos escalabilidade, segurança e
              alta performance.
            </p>
          </div>

          <div className="card">
            <h4>Cloud Computing</h4>
            <p>
              Migramos e gerenciamos aplicações na nuvem, proporcionando mais
              flexibilidade, redução de custos e disponibilidade 24/7.
            </p>
          </div>
        </div>
      </div>
    
    </div>
    
  );
};

export default ServicesLp;
