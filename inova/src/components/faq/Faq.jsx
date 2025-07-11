import React from "react";
import {useState} from 'react';

const Faq = () => {
  const [expandir, setExpandir] = useState(null);
  const toggleExpandir = (id) => {
    setExpandir(expandir === id ? null : id);
  };
    const faqData = [
  { id: 1,
    question: "O que é Inova ?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  { id: 2,
    question: "Como trabalhamos ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  { id: 3,
    question: "Quais serviços oferecemos ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  { id: 4,
    question: "Como posso entrar em contato ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  { id: 5,
    question: "Quais são os valores dos serviços ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  },
  { id: 6,
    question: "Quanto tempo leva um projeto ? ",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam a acccimus, fugit, in,.",
  }
]

  return (
    <div className="w-screen h-screen oklch(98.5% 0 0)">
      <div className="w-[80%] m-auto max-w-[1200px]
       oklch(87.1% 0.006 286.286) p-8 rounded-lg shadow-md">
        <h1 className="text-2xl mb-6 font-bold">Perguntas Frequentes</h1>
        {faqData.map((item) => (
          <div key={item.id} className="mb-4 last:mb-0">
            <button
              className= "w-full text-left text-xl focus:outline-none p-4 bg-sky-50 rounded-lg shadow-md flex justify-between items-center font-bold"
              onClick={() => toggleExpandir(item.id)}
              >
                {item.question}
              </button>
              {expandir === item.id && (
              <p className="faq-text">{item.answer}</p>
              )}
              </div>
        ))}
       </div>
      </div>
  );
}
export default Faq;