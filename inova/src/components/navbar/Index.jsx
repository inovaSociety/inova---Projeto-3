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
                <a href="">Home</a>
                <a href="">Projetos</a>
                <a href="">Serviços</a>
                <a href="">Sobre Nós</a>
                <a href="">Contato</a>
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