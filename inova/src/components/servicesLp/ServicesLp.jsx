import React, { useState, useEffect } from 'react'
import './Style.css'
import BoxService from './BoxService'

const ServicesLp = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  
  // Dados dos serviços
  const services = [
    {
      id: 1,
      title: "UI DESIGN",
      icon: <div className="service-icon ui-icon">🔮</div>, // Substitua pelo seu ícone
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."
    },
    {
      id: 2,
      title: "DESENVOLVIMENTO",
      icon: <div className="service-icon dev-icon">💻</div>, // Substitua pelo seu ícone
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."
    },
    {
      id: 3,
      title: "SEO",
      icon: <div className="service-icon seo-icon">🌐</div>, // Substitua pelo seu ícone
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

  return (
    <div className="services-container">
      <div className="services-sidebar">
        <h2>Serviços</h2>
        
        {/* Timeline moderna */}
        <div className="timeline-container">
          {/* Linha de fundo gradiente */}
          <div className="timeline-line"></div>
          
          {/* Pontos na timeline */}
          {services.map((service, index) => (
            <div key={service.id} className="timeline-point-wrapper" style={{ top: `${index * 33}%` }}>
              <div className={`timeline-point ${visibleSections.includes(service.id) ? 'active' : ''}`}>
                <div className="point-inner"></div>
                <div className="point-glow"></div>
              </div>
              <div className={`connector-line ${visibleSections.includes(service.id) ? 'active' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="services-content">
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