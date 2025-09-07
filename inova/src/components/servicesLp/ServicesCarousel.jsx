import React from "react";
import Slider from "react-slick";
import "./ServicesCarousel.css";

const ServicesCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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