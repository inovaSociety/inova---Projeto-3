import React from 'react'
import './Style.css';
import Index from '../navbar/Index';
import '../navbar/Style.css';
import '../footer/Style.css';
import Footer from '../footer/Footer';

const Contact = () => {
  return (
    <div id='Contact'>
      <Index />
      <div>
        <form className='contact-form'>
          <h1 className='titulo-contato'>Fale Conosco!</h1>
          <div className='form-group'>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className='form-group'>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className='form-group'>
            <label htmlFor="phone">Telefone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className='form-group'>
            <label for="interest">Assunto desejado:</label>
            <select id="interest" name="interest" required>
              <option value="" disabled selected hidden>Selecione uma opção</option>
              <option value="programa">Desenvolvimento Web</option>
              <option value="ux/ui">UX/UI Design</option>
              <option value="modelagem">Modelagem de Negocio</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>

      </div>
      <Footer />
    </div>
  )
}


export default Contact