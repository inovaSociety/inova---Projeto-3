import "./Style.css";
import Equipe from '../../images/imagemDaEquipe.jpg'
import React from "react";
const Home = () => {
  return (
    <>
      <div className="hero">

        <div class="grid-container">
          <header class="japa">
            Batata ipsum dolor sit amet, consectetur adipiscing elit,or sit amet, consectetur adipiscing elit
            or sit amet, consectetur adipiscing elit,or sit amet, consectetur adipiscing elitor sit amet, adi
          </header>

          <main class="main-text">
            <span className="sparkle">INOVA SOCIETY</span>
          </main>

          <div className="formaLouca">
            <img className="formaContida"  src={Equipe} alt="imagem da equipe" />
          </div>

          <section class="body-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              sapien vitae lacus convallis cursus. Sed consequat, purus nec
              bibendum fermentum... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              sapien vitae lacus convallis cursus. Sed consequat, purus nec
              bibendum fermentum... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              sapien vitae lacus convallis cursus. Sed consequat, purus nec
              bibendum fermentum...
            </p>
          </section>
        </div>

      </div>
    </>
  );
};

export default Home;
