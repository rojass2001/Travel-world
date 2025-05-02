import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // For animation effects

function Drawer({ navbaropen, open }) {
  return (
    // AnimatePresence handles exit animation when `open` becomes false
    <AnimatePresence mode="wait">
      {open && (
        // Motion.nav animates entrance/exit of the drawer
        <motion.nav
          initial={{ opacity: 0, y: -100 }} // Start from above and transparent
          animate={{ opacity: 1, y: 0 }}    // Slide in and fade in
          exit={{ opacity: 0, y: -100 }}    // Slide out and fade out
          transition={{ duration: 0.3 }}    // Animation duration

          // Styling and layout classes
          className='hidden rounded-xl shadow-md flex-col shadow-gray-300 
                     w-[calc(100%-40px)] h-[400px] bg-gray-300 absolute top-[60px]
                     mr-[20px] ml-[20px] text-xl font-bold cursor-pointer space-y-7
                     sm:flex sm:flex-col items-center place-content-center'
        >
          {/* Navigation links with click event to close drawer */}
          <Link to='/' onClick={navbaropen}>Home</Link>
          <Link to='/gallery' onClick={navbaropen}>Gallery</Link>
          <Link to='/about' onClick={navbaropen}>About</Link>
          <Link to='/contact' onClick={navbaropen}>Contact</Link>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
