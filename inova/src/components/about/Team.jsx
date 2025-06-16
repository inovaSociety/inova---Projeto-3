import React from 'react'
import Ranger from '../../images/power ranger vermelho.jpg'
import './Style.css'
import SetaDireita from '../../images/seta-direita.png'
import SetaEsquerda from '../../images/seta-esquerda.png'

const Team = () => {
  return (
    <div className='body-team'>
        <div className='wrapper'>
            <div className='i'>
                <img src={SetaEsquerda} alt="seta esquerda" width={15}/>
            </div>
            
            <ul className='carousel'>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                    </div>
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                </li>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                    </div>
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                </li>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                    </div>
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                </li>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                    </div>
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                </li>
                <li className='card'>
                    <div className='img'>
                        <img src={Ranger} alt="imagem do profissional" />
                    </div>
                        <h2>Jason Lee</h2>
                        <span>Desenvolvedor</span>
                </li>
                                
            </ul>
            <div className='i'>
                <img src={SetaDireita} alt="seta direita" width={15}  />
            </div>
            
        </div>
    </div>
    
  )
}

export default Team