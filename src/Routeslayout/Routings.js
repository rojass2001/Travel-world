
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../pages/Home';
import Footer from '../Components/Footer';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Gallery from '../pages/Gallery'
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
