import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ranger from '../../images/power ranger vermelho.jpg';

import IconLinkedin from '../../images/linkedinIcon.png';
import IconGithub from '../../images/githubIcon.png';
import IconInstagram from '../../images/instagramIcon.png';

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
            job:"Desenvolvedor",
            socialIcons: [ // Add social icons here
                {type: 'linkedin', icon: IconLinkedin, url: ''},
                {type: 'github', icon: IconGithub, url: ''}
                
            ]
        },
        {
            id: 2,
            name:"Jason Lee",
            img:Ranger,
            job:"Desenvolvedor",
            socialIcons: [
                {type: 'linkedin', icon: IconLinkedin, url: ''},
                {type: 'github', icon: IconGithub, url: ''}
                
            ]
        },
        {
            id: 3,
            name:"Fernando Ribeiro",
            img:Ranger,
            job:"Desenvolvedor",
            socialIcons: [ 
                {type: 'linkedin', icon: IconLinkedin, url: 'https://www.linkedin.com/in/fernando-rgomes1880'},
                {type: 'github', icon: IconGithub, url: 'https://github.com/fernando-rgomes'},
                {type: 'instagram', icon: IconInstagram, url: 'https://www.instagram.com/fe.juniorr/'}
            ]
        },
        {
            id: 4,
            name:"Jason Lee",
            img:Ranger,
            job:"Desenvolvedor",
            socialIcons: [ // Add social icons here
                {type: 'linkedin', icon: IconLinkedin, url: ''},
                {type: 'github', icon: IconGithub, url: ''}
                
            ]
        }

    ]
  return (
    <div className='body-team'>
        <div className='wrapper'>

            <h2 className='team-title'>Conheça nosso time</h2>
           
            <Slider {...settings}>
                {data.map((d) =>(
                    <ul className='carousel'>
                        <li className='card'>
                            <div className='img'>
                                <img src={d.img} alt="imagem do profissional" />
                            </div>
                                <h2>{d.name}</h2>
                                <span>{d.job}</span>
                                {d.socialIcons && d.socialIcons.length > 0 && ( // Renderiza apenas se houver ícones
                                    <div className='social-icons'> {/* Nova div para os ícones */}
                                        {d.socialIcons.map((icon, index) => (
                                            <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
                                                <img src={icon.icon} alt={icon.type} className={`icon-${icon.type}`} />
                                            </a>
                                        ))}
                                    </div>
                                )}
                        </li>           
                    </ul>
                ))}
            </Slider>
            

           
            
        </div>
    </div>
    
  )
}

export default Team