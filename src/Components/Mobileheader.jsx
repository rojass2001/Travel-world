import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import React from 'react'


function Mobileheader({navbaropen,open }) {
    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
             
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    className=' hidden rounded-xl shadow-md shadow-gray-300 w-[calc(100%-40px)] h-[400px] bg-gray-200  absolute top-[60px] 
       mr-[20px] ml-[20px] text-xl font-bold cursor-pointer space-x-7 sm:block md:block items-center content-center  '>
                    <Link to='/'>
                        <p onClick={navbaropen} className=' px-2  '>Home</p>
                    </Link>
                    <Link to='/gallery'>
                        <p onClick={navbaropen} className=' px-2 '>Gallery</p>
                    </Link>
                    <Link to='/about'>
                        <p onClick={navbaropen} className=' px-2 '>about</p>
                    </Link>
                    <Link to='/contact'>
                        <p onClick={navbaropen} className=' px-2  '>Contact</p>
                    </Link>
                </motion.div>
            )}
            </AnimatePresence>
  )
}

export default Mobileheader
