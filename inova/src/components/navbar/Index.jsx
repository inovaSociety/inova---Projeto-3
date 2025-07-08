import "./Style.css";
import logo from "../../images/logo.svg";
import React from "react";
import Faixa from "../about/Faixa";

const Index = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo do site " />
          </div>
          <div className="right">
            <a href="/">Home</a>
            <a href="#Project">Projetos</a>
            <a href="#Service">Serviços</a>
            <a href="#About">Sobre Nós</a>
          </div>
          <div className="b-teste">
            <a href="/contato">Entre em contato</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
