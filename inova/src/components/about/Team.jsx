import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ranger from "../../images/power ranger vermelho.jpg";

import IconLinkedin from "../../images/linkedinIcon.png";
import IconGithub from "../../images/githubIcon.png";
import IconInstagram from "../../images/instagramIcon.png";
import Fernando from "../../images/foto_fernando.png";

import "./Style.css";

const Team = () => {

    
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-purple-600 hover:text-purple-800"
      onClick={onClick}
    >
      <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7.05 4.05a.75.75 0 011.06 0L13 8.94a.75.75 0 010 1.06L8.1 14.95a.75.75 0 01-1.06-1.06L11.94 10 7.05 5.11a.75.75 0 010-1.06z" />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-purple-600 hover:text-purple-800"
      onClick={onClick}
    >
      <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.95 4.05a.75.75 0 010 1.06L8.06 10l4.89 4.89a.75.75 0 01-1.06 1.06L7 10.94a.75.75 0 010-1.06l4.89-4.89a.75.75 0 011.06 0z" />
      </svg>
    </div>
  );

  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const data = [
    {
      id: 1,
      name: "Jason Lee",
      img: Ranger,
      job: "Desenvolvedor",
      socialIcons: [
        // Add social icons here
        { type: "linkedin", icon: IconLinkedin, url: "" },
        { type: "github", icon: IconGithub, url: "" },
      ],
    },
    {
      id: 2,
      name: "João Miguel",
      img: Ranger,
      job: "Desenvolvedor",
      socialIcons: [
        {
          type: "linkedin",
          icon: IconLinkedin,
          url: "www.linkedin.com/in/joao-miguel-santos-1589b0311",
        },
        {
          type: "github",
          icon: IconGithub,
          url: "https://github.com/ricoRecruta",
        },
      ],
    },
    {
      id: 3,
      name: "Fernando Ribeiro",
      img: Fernando,
      job: "Desenvolvedor",
      socialIcons: [
        {
          type: "linkedin",
          icon: IconLinkedin,
          url: "https://www.linkedin.com/in/fernando-rgomes1880",
        },
        {
          type: "github",
          icon: IconGithub,
          url: "https://github.com/fernando-rgomes",
        },
        {
          type: "instagram",
          icon: IconInstagram,
          url: "https://www.instagram.com/fe.juniorr/",
        },
      ],
    },
    {
      id: 4,
      name: "Jason Lee",
      img: Ranger,
      job: "Desenvolvedor",
      socialIcons: [
        // Add social icons here
        { type: "linkedin", icon: IconLinkedin, url: "" },
        { type: "github", icon: IconGithub, url: "" },
      ],
    },
  ];
  return (
    <div className="body-team">
      <div className="wrapper">
        <h2 className="team-title">Conheça nosso time</h2>

        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id}  className="carousel">
              <div className="card">
                <div className="img">
                  <img src={d.img} alt="imagem do profissional" />
                </div>
                <h2>{d.name}</h2>
                <span>{d.job}</span>
                {d.socialIcons &&
                  d.socialIcons.length > 0 && ( // Renderiza apenas se houver ícones
                    <div className="social-icons">
                      {" "}
                      {/* Nova div para os ícones */}
                      {d.socialIcons.map((icon, index) => (
                        <a
                          key={index}
                          href={icon.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={icon.icon}
                            alt={icon.type}
                            className={`icon-${icon.type}`}
                          />
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
