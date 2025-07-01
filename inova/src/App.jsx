import './App.css'
import Navbar from './components/navbar/Index'
import Home from './components/home/Home'
import Service from './components/servicesLp/ServicesLp'
import Project from './components/projects/Project'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/contact/Contact'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
            <Service />
            <Project />
            <About />
            <Footer />
          </>
        } />
        <Route path='/contato' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
