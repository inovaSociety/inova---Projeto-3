import React from 'react'
import Ranger from '../../images/power ranger vermelho.jpg'
import './Style.css'

const Team = () => {
  return (
    <div className='body-team'>
        <div className='wrapper'>
            <ul className='carousel'>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                    </div>
                </li>
                 <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                    </div>
                </li>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                    </div>
                </li>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                    </div>
                </li>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                    </div>
                </li>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
    
  )
}

export default Team