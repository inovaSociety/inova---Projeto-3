import './Style.css';
import React from 'react';
import logo from '../../images/logo.svg';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='inova-column'>
          <div className='logo-footer'>
            <img src={logo} alt="logo do site" />
          </div>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta delectus deleniti
            doloremque ipsam, repudiandae molestiae temporibus dolor necessitatibus minima aliquid
            praesentium, facere, explicabo ipsum nesciunt pariatur laborum quos in facilis.
          </h4>
          <ul className='social-icons'>
            <li><img src={instagram} alt="logo Instagram" /></li>
            <li><img src={linkedin} alt="logo LinkedIn" /></li>
            <li><img src={github} alt="logo GitHub" /></li>
          </ul>
        </div>

        <div className='services-column'>
          <h3>Serviços</h3>
          <ul className='footer-list'>
            <li><a href="#">Desenvolvimento Web</a></li>
            <li><a href="#">UX/UI Design</a></li>
            <li><a href="#">Modelagem de Negocio</a></li>
            <li><a href="#">Desenvolvimento Mobile</a></li>
          </ul>
        </div>

        <div className='about-column'>
          <h3>Informações</h3>
          <ul className='footer-list'>
            <li><a href="#">Perguntas Frequentes</a></li>
            <li><a href="#">Processo de Trabalho</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Termos e condições</a></li>
          </ul>
        </div>

        <div className='contact-column'>
          <h3>Entrar em contato</h3>
          <p>Digite seu email para contato</p>
          <form>
            <input type="email" placeholder="Seu email" required />
            <button type="submit">Entrar em contato</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
