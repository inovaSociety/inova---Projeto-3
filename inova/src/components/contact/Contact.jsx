import './Style.css';
import Index from '../navbar/Index';
import Footer from '../footer/Footer';
import Faq from '../faq/Faq';
import '../faq/Style.css';
import '../navbar/Style.css';
import '../footer/Style.css';
import {useForm } from "react-hook-form";
import validator from 'validator';


const Contact = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    
  console.log({errors}); //Para ver os erros no console

  const onSubmit = (data) => {
    console.log(data);
  };
  

  return (
    <div id='Contact'>
      <Index />
      <div>
        <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='titulo-contato'>Fale Conosco!</h1>

          <div className='form-group'>
            <label htmlFor="name">Nome:</label>
            <input 
            className={errors?.name &&  "input-error"}
            type="text"  
            placeholder='Digite seu nome...'
            {...register("name", {required: true })}
            />
            {errors?.name?.type === "required" && (<p className='error-message'>Nome é obrigatório.</p>)}
          </div>

          <div className='form-group'>
            <label htmlFor="email">E-mail:</label>
            <input 
            className={errors?.email && "input-error"}
            type="email"  
            placeholder='Digite seu e-mail...'
            {...register("email", {
              required: true, 
              validate: (value) => validator.isEmail(value),
            })}
            />
            {errors?.email?.type === "required" && (<p className='error-message'>E-mail é obrigatório.</p>)}

            {errors?.email?.type === "validate" && (<p className='error-message'>E-mail é inválido.</p>)}
          </div>

          <div className='form-group'>
            <label htmlFor="interest">Assunto desejado:</label>
            <select 
              defaultValue=""
              className={errors?.interest && "input-error"}
              {...register("interest", {required: true })}
            >
              <option value="" disabled hidden >Selecione uma opção</option>
              <option value="programa">Desenvolvimento Web</option>
              <option value="ux/ui">UX/UI Design</option>
              <option value="modelagem">Modelagem de Negocio</option>
            </select>
            {errors?.interest && (<p className='error-message'>Selecione um assunto.</p>)}
          </div>

          <div className='form-group'>
            <label htmlFor="message">Mensagem:</label>
            <textarea 
            className={errors?.message && "input-error"} 
            rows="4"
            placeholder='Digite sua mensagem...'
            {...register("message", {required: true })}
            ></textarea>
            {errors?.message?.type === "required" && (<p className='error-message'>Mensagem é obrigatória.</p>)}
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