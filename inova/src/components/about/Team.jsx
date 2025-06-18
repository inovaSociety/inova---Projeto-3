import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ranger from '../../images/power ranger vermelho.jpg'


import './Style.css'
import SetaDireita from '../../images/seta-direita.png'
import SetaEsquerda from '../../images/seta-esquerda.png'

const Team = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1
    }

    const data = [
        {
            id: 1,
            name:"Jason Lee",
            img:Ranger,
            job:"Desenvolvedor"
        },
        {
            id: 2,
            name:"Jason Lee",
            img:Ranger,
            job:"Desenvolvedor"
        },
        {
            id: 3,
            name:"Jason Lee",
            img:Ranger,
            job:"Desenvolvedor"
        },
        {
            id: 4,
            name:"Jason Lee",
            img:Ranger,
            job:"Desenvolvedor"
        }

    ]
  return (
    <div className='body-team'>
        <div className='wrapper'>


           
            <Slider {...settings}>
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
            </Slider>
            

           
            
        </div>
    </div>
    
  )
}

export default Team