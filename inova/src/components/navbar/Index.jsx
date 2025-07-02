import './Style.css'
import logo from '../../images/logo.svg'
import React from 'react'

const Index = () => {
  return (
    <>
        <div className='header'>
            <div className='container'>
            <div className='logo'>
                <img src={logo} alt="logo do site " />
            </div>
            <div className='right'>
                <a href="#Home">Home</a>
                <a href="#Project">Projetos</a>
                <a href="#Service">Serviços</a>
                <a href="#About">Sobre Nós</a>
                <a href="#Contact">Contato</a>
            </div>
            <div className='b-teste'>
                <a href="">Entre em contato</a>
            </div>
            </div>    
        </div>
    </>
  )
}

export default Index