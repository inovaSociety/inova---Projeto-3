import logo from '../../images/inovas_logo.svg';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-white px-8 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Coluna Inova */}
        <div className="flex-1 space-y-4 max-w-md">
          <img src={logo} alt="logo do site" className="h-60 -mt-15" />
          <p className="text-base text-black -mt-15 font-semibold">
            Inova Society é uma empresa focada em soluções digitais inovadoras, oferecendo serviços personalizados em desenvolvimento web, design de interfaces e modelagem de negócios. Nosso compromisso é transformar ideias em experiências digitais impactantes.
          </p>
          <div className="flex space-x-4 mt-8">
            <img src={instagram} alt="logo Instagram" className="h-8 w-8" />
            <img src={linkedin} alt="logo LinkedIn" className="h-8 w-8" />
            <img src={github} alt="logo GitHub" className="h-8 w-8" />
          </div>
        </div>

        {/* Coluna Serviços */}
        <div>
          <h3 className="font-bold mb-2 text-lg">Serviços</h3>
          <ul className="space-y-1 text-sm text-black font-semibold">
            <li><a href="#" className="hover:underline">Desenvolvimento Web</a></li>
            <li><a href="#" className="hover:underline">UX/UI Design</a></li>
            <li><a href="#" className="hover:underline">Modelagem de Negocio</a></li>
          </ul>
        </div>

        {/* Coluna Informações */}
        <div>
          <h3 className="font-bold mb-2 text-lg">Informações</h3>
          <ul className="space-y-1 text-sm text-black font-semibold ">
            <li><a href="#" className="hover:underline">Perguntas Frequentes</a></li>
            <li><a href="#" className="hover:underline">Termos e condições</a></li>
          </ul>
        </div>
        
        {/* Coluna Contato */}
        <div>
          <h3 className="font-bold mb-4">Fale Conosco</h3>
          <button
            onClick={() => navigate('/contato')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-bold"
          >
            Entrar em contato
          </button>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; 2025 Inova. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
