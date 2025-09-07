import React from "react";
import Slider from "react-slick";
import "./ServicesCarousel.css";

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
    { title: "Desenvolvimento Web", desc: "Sites modernos e responsivos" },
    { title: "Sistemas Sob Medida", desc: "Aplicações personalizadas" },
    { title: "Soluções em Nuvem", desc: "Infraestrutura escalável" },
    { title: "Consultoria Tech", desc: "Estratégia e inovação" },
  ];

  return (
    <div className="services-carousel">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;