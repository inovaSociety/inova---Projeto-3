import './Style.css';
import logo from '../../images/inovas_logo.svg';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import { useNavigate } from 'react-router-dom';



const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='inova-column'>
          <div className='logo-footer'>
            <img src={logo} alt="logo do site" />
          </div>
          <h4>
            Inova Society é uma empresa focada em soluções digitais inovadoras, oferecendo serviços personalizados em desenvolvimento web, design de interfaces e modelagem de negócios. Nosso compromisso é transformar ideias em experiências digitais impactantes.
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
          </ul>
        </div>

        <div className='about-column'>
          <h3>Informações</h3>
          <ul className='footer-list'>
            <li><a href="#">Perguntas Frequentes</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Termos e condições</a></li>
          </ul>
        </div>

        <div className='contact-column'>
          <h3>Fale Conosco</h3>
            <button className='contato' onClick={()=> navigate('/contato')}>Entrar em contato</button>
        </div>
      <div className='copyright'>
        <p>&copy; 2025 Inova. Todos os direitos reservados.</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
