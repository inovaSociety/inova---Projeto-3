import React, { useState, useEffect, useRef } from 'react'
import './Style.css'
import BoxService from './BoxService'

const ServicesLp = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const contentRef = useRef(null);
  const timelineRef = useRef(null);
  
  // Dados dos serviços
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.service-section');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = parseInt(section.getAttribute('data-id'));
        
        // Verifica se a seção está visível na tela
        if (sectionTop < window.innerHeight - 200) {
          setVisibleSections(prev => {
            if (!prev.includes(sectionId)) {
              return [...prev, sectionId];
            }
            return prev;
          });
        }
      });
    };

    // Executa na carga inicial
    handleScroll();
    
    // Adiciona evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Limpeza
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calcula as posições dos pontos da timeline para alinhar com os boxes
  useEffect(() => {
    if (contentRef.current && timelineRef.current) {
      const calculatePointPositions = () => {
        const boxes = contentRef.current.querySelectorAll('.box-pai');
        const timelinePoints = timelineRef.current.querySelectorAll('.timeline-point-wrapper');
        const servicesContent = contentRef.current;
        const servicesContentRect = servicesContent.getBoundingClientRect();
        
        boxes.forEach((box, index) => {
          if (timelinePoints[index]) {
            const boxRect = box.getBoundingClientRect();
            
            // Calcular o centro do box em relação ao topo do content
            const boxCenterY = boxRect.top + (boxRect.height / 2) - servicesContentRect.top;
            
            // Definir posição do ponto da timeline para alinhar com o centro do box
            timelinePoints[index].style.top = `${boxCenterY}px`;
          }
        });
      };
      
      // Calcular posições iniciais e adicionar listener para recalcular em redimensionamentos
      calculatePointPositions();
      
      // Recalcular após um breve delay para garantir que os elementos estão totalmente renderizados
      setTimeout(calculatePointPositions, 100);
      
      window.addEventListener('resize', calculatePointPositions);
      
      return () => {
        window.removeEventListener('resize', calculatePointPositions);
      };
    }
  }, [visibleSections]);

  return (
    <div className="services-container">
      <div className="services-sidebar">
        <h2>Serviços</h2>
        
        {/* Timeline moderna - posicionada corretamente após a palavra "Serviços" */}
        <div className="timeline-container" ref={timelineRef}>
          {/* Linha vertical fixa */}
          <div className="timeline-line"></div>
          
          {/* Pontos na timeline - serão posicionados via JavaScript */}
          {services.map((service, index) => (
            <div key={service.id} className="timeline-point-wrapper" style={{position: 'absolute'}}>
              <div className={`timeline-point ${visibleSections.includes(service.id) ? 'active' : ''}`}>
                <div className="point-inner"></div>
              </div>
              <div className={`connector-line ${visibleSections.includes(service.id) ? 'active' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="services-content" ref={contentRef}>
        {services.map(service => (
          <BoxService 
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            isVisible={visibleSections.includes(service.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesLp