
import './App.css'
import Navbar from './components/navbar/Index'
import Home from './components/home/Home'
import Service from './components/servicesLp/ServicesLp'
import Project from './components/projects/Project'
import About from './components/about/About'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
     <Navbar/>
     <Home/>
     <Service/>
     <Project/>
     <About/>
     <Footer/>
    </>
  )
}

export default App
