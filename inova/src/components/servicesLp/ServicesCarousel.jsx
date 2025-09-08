import React from "react";
import Slider from "react-slick";
import "./ServicesCarousel.css";
import Codi from "../../images/codificacao.png";
import Engre from "../../images/computacao-em-nuvem.png"
import Consultor from "../../images/consultor.png"


// seta esquerda
const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3037BF"      // contorno branco
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>
);

// seta direita
const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3037BF"      // contorno branco
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>
);

const ServicesCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendArrows: (arrows) => (
      <div className="custom-arrows">{arrows}</div>
    ),
  };

  const services = [
    { title: "Desenvolvimento Web",
     desc: "Sites modernos e responsivos" 
    },

    { title: "Sistemas Sob Medida", 
        desc: "Soluções sob medida para o seu negócio Construímos sistemas personalizados que atendem às necessidades específicas da sua empresa. Desde plataformas web até softwares corporativos, garantimos escalabilidade, segurança e alta performance.",
        img: Codi 
    },
    { title: "Soluções em Nuvem", 
       desc: "Infraestrutura moderna e segura Migramos, hospedamos e gerenciamos aplicações na nuvem, proporcionando mais flexibilidade, redução de custos e disponibilidade 24/7. Trabalhamos com as principais plataformas do mercado: AWS, Azure e Google Cloud ",
       img: Engre
    },
    { title: "Consultoria Tech", 
        desc: "Phasellus sit amet sapien nec nunc cursus pretium. Integer luctus, magna at vulputate viverra, nisl mauris volutpat nulla, vitae convallis erat lacus sed ipsum. Cras quis arcu at urna bibendum ultricies non ac ligula. Sed vitae mi nec",
        img: Consultor 
    },
  ];

  return (
    <div className="services-carousel">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="circulo"> <img src={service.img} alt="teste" /></div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;