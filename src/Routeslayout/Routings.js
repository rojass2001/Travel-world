import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from '../Components/Header';
//import Header from '../Components/Home';
import Home from '../Components/Home';
import Gallery from '../Components/Gallery';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import About from '../Components/About';
function Routings() {
  return (
    <div>
         <Router>
 <Header/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Travel-world' element={<Home/>}/>
  <Route path='/gallery' element={<Gallery/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/about' element={<About/>}/>
  </Routes>
  <Footer/>
  </Router> 
    </div>
  )
}

export default Routings
