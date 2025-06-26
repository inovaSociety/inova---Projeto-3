import React from "react";
import './CardInovacao.css';


function CardInovacao(){
    return(
        <div className="card-inovacao">
        <h1 className="titulo-principal">Nós somos uma empresa com o propósito <span className="destaque">de transformar o mundo</span></h1>
        <h2 className="subtitulo">UTILIZANDO A INOVAÇÃO</h2>
        <p className="saiba-mais">Conheça mais sobre o time Inova</p>
        </div>
    );
}

export default CardInovacao