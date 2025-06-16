
import './App.css'
import Navbar from './components/navbar/Index'
import Home from './components/home/Home'
import Service from './components/servicesLp/ServicesLp'
import Project from './components/projects/Project'
import About from './components/about/About'
function App() {


  return (
    <>
     <Navbar/>
     <Home/>
     <Project/>
     <Service/>
     <About/>
     
    </>
  )
}

export default App
