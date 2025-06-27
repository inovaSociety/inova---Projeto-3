import './Style.css'
import React from 'react'
import logo from '../../images/logo.svg'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='inova-column'>
          <h3><img src={logo} alt="logo do site" /></h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ad consequuntur magnam rerum doloribus itaque aliquid culpa, eos minima! Dolor at cum odit deserunt? Molestiae in ratione culpa qui recusandae.</h4>
          <ul className='social-icons'>
            <li><img src={instagram} alt="logo Instagram " /></li>
            <li><img src={linkedin} alt="logo linkedin " /></li>
            <li><img src={github} alt="logo github " /></li>
          </ul>
        </div>
        <div className='services-column'>
          <div className='footer-services'>
            <h3>Serviços</h3>
            <ul>
              <li><a href="#">Desenvolvimento Web</a></li>
              <li><a href="#">Ux/UI Design</a></li>
              <li><a href="#">Modelagem de Negocio</a></li>
              <li><a href="#">Desenvolvimento Mobile</a></li>
            </ul>
          </div>
        </div>
        <div className='about-column'>
          <div className='footer-about'>
            <h3>Informações</h3>
            <ul>
              <li><a href="#">Perguntas Frequentes</a></li>
              <li><a href="#">Processo de Trabalho</a></li>
              <li><a href="#">Sobre nos</a></li>
              <li><a href="#">Termos e condicoes</a></li>
            </ul>
          </div>
        </div>
        <div className='news-column'>
          <h3>Newsletter</h3>
          <p>Inscreva-se para receber novidades e atualizações.</p>
          <form>
            <input type="email" placeholder="Seu email" required />
            <button type="submit">Inscrever-se</button>
          </form>
        </div>

      </div>
    </>
  )
}
export default Footer