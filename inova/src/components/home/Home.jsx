import "./Style.css";
import React from "react";
import equipe from "../../images/pexels-mart-production-7550298.jpg";
const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="h-left">
          <div className="title">
            <div className="line">
              <span className="sparkle">INOVAÇÃO</span> <span className="line-one">  e usabilidade</span>
              <span className="line-two"> em cada detalhe</span>
              <span className="sparkle">DESTAQUE</span> <span className="line-three">  sua empresa online</span>
            </div>
          </div>
          <div className="links">
            <a href="" className="b-teste">
              Conheça os projetos
            </a>
          </div>
        </div>
        <div className="h-right">
          <img src={equipe} alt="side" width={350} className="n-img" />
        </div>
      </div>
    </>
  );
};

export default Home;
