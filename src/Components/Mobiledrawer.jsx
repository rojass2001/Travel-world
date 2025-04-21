import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import React from 'react'


function Drawer({navbaropen,open }) {
    return (
    <AnimatePresence mode="wait">
        {open && (
        <motion.nav
             initial={{ opacity: 0, y: -100 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -100 }}
             transition={{ duration: 0.3 }}
             className=' hidden rounded-xl shadow-md  flex-col shadow-gray-300 w-[calc(100%-40px)] h-[400px] bg-gray-300  absolute top-[60px] 
                        mr-[20px] ml-[20px] text-xl font-bold cursor-pointer space-y-7 sm:flex sm:flex-col items-center place-content-center  '>
                <Link to='/' onClick={navbaropen} >Home</Link>
                <Link to='/gallery' onClick={navbaropen} >Gallery</Link>
                <Link to='/about' onClick={navbaropen} >about</Link>
                <Link to='/contact'onClick={navbaropen} >Contact </Link>
        </motion.nav>
            )}
     </AnimatePresence>
  )
}

export default Drawer
