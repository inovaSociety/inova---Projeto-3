import React from 'react'
import './Style.css'

const BoxService = ({ id, title, description, icon, isVisible }) => {
  return (
    <div className={`box-pai service-section ${isVisible ? 'visible' : ''}`} data-id={id}>
        <div className='box-filho-img'> 
            {icon ? icon : <img src="" alt="imagem da caixa de texto" />}
        </div>
        <div className='box-filho-texto'> 
            <h4>{title || "Lorem Ipsum"}</h4>
            <p>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."}</p>
        </div>
    </div>
  )
}

export default BoxService