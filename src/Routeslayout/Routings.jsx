
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Footer from '../Components/Footer';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Gallery from '../pages/Gallery'
import Navbar from '../Components/Navbar';

function Routings() {
  return (
    <>
  <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Travel-world' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    <Footer/>
  </Router> 
    </>
  )
}

export default Routings
