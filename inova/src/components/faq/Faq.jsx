import React from "react";
import './Style.css';

const Faq = () => {
    const faqData = [
  {
    question: "O que é Inova ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  {
    question: "Como trabalhamos ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  {
    question: "Quais serviços oferecemos ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  {
    question: "Como posso entrar em contato ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  {
    question: "Quais são os valores dos serviços ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  {
    question: "Quanto tempo leva um projeto ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  }
]
  return (
    <div className="faq-container">
      <h1 className="title-faq">Perguntas Frequentes</h1>
      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h2 className="question">{item.question}</h2>
            <p className="faq-text">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Faq;