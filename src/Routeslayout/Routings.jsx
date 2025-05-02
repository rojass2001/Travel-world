import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing routing tools from React Router
import Home from '../pages/Home';          // Importing the Home page component
import Footer from '../Components/Footer'; // Importing the Footer component
import Contact from '../pages/Contact';    // Importing the Contact page
import About from '../pages/About';        // Importing the About page
import Gallery from '../pages/Gallery';    // Importing the Gallery page
import Navbar from '../Components/Navbar'; // Importing the Navbar component

function Routings() {
  return (
    <>
      {/* Router wraps the entire application to enable routing */}
      <Router>

        {/* Navbar is displayed on all pages */}
        <Navbar/>

        {/* Define all routes inside Routes */}
        <Routes>
          {/* Route for Home page */}
          <Route path='/' element={<Home/>} />
          
          {/* Optional alternate route for the same Home page (e.g. GitHub Pages path) */}
          <Route path='/Travel-world' element={<Home/>} />

          {/* Route for Gallery page */}
          <Route path='/gallery' element={<Gallery/>} />

          {/* Route for Contact page */}
          <Route path='/contact' element={<Contact/>} />

          {/* Route for About page */}
          <Route path='/about' element={<About/>} />
        </Routes>

        {/* Footer is also displayed on all pages */}
        <Footer/>
      </Router>
    </>
  );
}

export default Routings;
