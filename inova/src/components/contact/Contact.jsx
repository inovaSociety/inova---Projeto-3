import './Style.css';
import Index from '../navbar/Index';
import Footer from '../footer/Footer';
import Faq from '../faq/Faq';
import '../faq/Style.css';
import '../navbar/Style.css';
import '../footer/Style.css';

import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = { name, email, interest, message };
    console.log(formData);
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div id='Contact'>
      <Index />
      <div>
        <form className='contact-form' onSubmit={sendEmail}>
          <h1 className='titulo-contato'>Fale Conosco!</h1>

          <div className='form-group'>
            <label htmlFor="name">Nome:</label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            value={name}
            placeholder='Digite seu nome..'
            onChange={(e) => setName(e.target.value)}
            required 
            />
          </div>

          <div className='form-group'>
            <label htmlFor="email">E-mail:</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder='Digite seu e-mail...'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
            />
          </div>

          <div className='form-group'>
            <label for="interest">Assunto desejado:</label>
            <select 
            id="interest" 
            name="interest" 
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            required
            >
              <option value="" disabled hidden>Selecione uma opção</option>
              <option value="programa">Desenvolvimento Web</option>
              <option value="ux/ui">UX/UI Design</option>
              <option value="modelagem">Modelagem de Negocio</option>
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor="message">Mensagem:</label>
            <textarea 
            id="message"
            name="message" 
            rows="4"
            placeholder='Digite sua mensagem...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Faq />
      <Footer />
    </div>
  );
};


export default Contact;