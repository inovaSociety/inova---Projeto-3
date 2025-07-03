import React from "react";
import './CardInovacao.css';


function CardInovacao(){
    return(
        <div className="card-inovacao">
            <h1 className="subtitulo">Somos <span style={{color:"#2474f6" }}>INOVA SOCIETY</span></h1>
        <h2 className="titulo-principal">Uma empresa com o propósito <span className="destaque">de transformar o seu negócio</span></h2>
        <p className="saiba-mais">Conheça mais sobre o time Inova <img className="saiba-mais-img" width="30" height="30" src="https://img.icons8.com/color/48/about.png" alt="about"/></p>
        </div>
    );
}

export default CardInovacao