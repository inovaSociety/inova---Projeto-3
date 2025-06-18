import React from 'react'
import Ranger from '../../images/power ranger vermelho.jpg'
import './Style.css'
import SetaDireita from '../../images/seta-direita.png'
import SetaEsquerda from '../../images/seta-esquerda.png'

const Team = () => {

    const data = [
        {
            id: 1,
            name:"Jason Lee",
            img:Ranger,
            job:"Desenvolvedor"
        }





    ]
  return (
    <div className='body-team'>
        <div className='wrapper'>


            {/*<div className='i'>
                <img src={SetaEsquerda} alt="seta esquerda" width={15}/>
            </div>*/}

            {data.map((d) =>(
                
                <ul className='carousel'>
                    <li className='card'>
                        <div className='img'>
                            <img src={d.img} alt="imagem do profissional" />
                        </div>
                            <h2>{d.name}</h2>
                            <span>{d.job}</span>
                    </li>           
                </ul>
            ))}

            {/*<div className='i'>
                <img src={SetaDireita} alt="seta direita" width={15}  />
            </div>*/}
            
        </div>
    </div>
    
  )
}

export default Team