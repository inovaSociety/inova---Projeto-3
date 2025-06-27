import React from "react";
import './CardInovacao.css';


function CardInovacao(){
    return(
        <div className="card-inovacao">
        <h1 className="titulo-principal">Uma empresa com o propósito <span className="destaque">de transformar o mundo</span></h1>
        <h2 className="subtitulo">Somos <span style={{color:"#034ec6"}}>INOVA SOCIETY</span></h2>
        <p className="saiba-mais">Conheça mais sobre o time Inova <img className="saiba-mais-img" width="30" height="30" src="https://img.icons8.com/color/48/about.png" alt="about"/></p>
        </div>
    );
}

export default CardInovacao