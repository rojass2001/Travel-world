import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Hamburger icon for mobile
import { motion } from 'framer-motion'; // Animation wrapper
import Drawer from './Mobiledrawer'; // Mobile drawer component

// Tailwind classes for the header container
const headerdiv = "fixed flex px-3 justify-between bg-white shadow-md shadow-gray-300 no-underline w-[98%] h-[55px] bg-white top-[20px] top-0 left-0 right-0 mx-auto items-center z-50";

// Tailwind classes for each navigation link
const navlink = "hover:bg-gray-400";

function Navbar() {
  // State to manage drawer visibility
  const [open, setopen] = useState(false);

  // Toggles drawer open/close state
  const navbaropen = () => { setopen(!open); };

  return (
    <motion.nav className={headerdiv}>
      {/* Logo or Brand Name */}
      <h2 className="text-2xl font-bold">Travel-World</h2>

      {/* Navigation section */}
      <div className='flex items-center'>
        
        {/* Desktop navigation links (hidden on small screens) */}
        <div className="flex text-xl font-bold cursor-pointer space-x-7 sm:hidden">
          <Link to='/' className={navlink}>Home</Link>
          <Link to='/gallery' className={navlink}>Gallery</Link>
          <Link to='/about' className={navlink}>About</Link>
          <Link to='/contact' className={navlink}>Contact</Link>
        </div>

        {/* Mobile menu button (visible only on small screens) */}
        <button onClick={navbaropen}>
          <FaBars className='text-black text-2xl font-bold hidden sm:block' />
        </button>
      </div>

      {/* Mobile drawer component (conditionally shown) */}
      <Drawer navbaropen={navbaropen} open={open} />
    </motion.nav>
  );
}

export default Navbar;
