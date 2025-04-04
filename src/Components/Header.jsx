import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Mobileheader from './Mobileheader'
import { motion } from 'framer-motion'
 const headerdiv="fixed flex px-3 justify-between  w-[98%] h-[55px] bg-white top-[20px] top-0 left-0 right-0 mx-auto items-center z-50  "
const navlink=" hover:bg-gray-400    "
 function Header() {
  const[open,setopen]=useState(false)
 
 const navbaropen=()=>{
  setopen(!open)
 }
  return (
   
    <motion.header className={headerdiv}>
        <h2 className="text-2xl font-bold">Travel</h2>
        <div className='flex items-center '>
        <div className="flex  text-xl font-bold cursor-pointer space-x-7  sm:hidden">
        <Link to='/'>
        <p className={navlink}>Home</p>
        </Link>
        <Link to='/gallery'>
        <p className={navlink}>Gallery</p>
        </Link>
        <Link to='/about'>
        <p className={navlink}>about</p>
        </Link>
        <Link to='/contact'>
        <p className={navlink}>Contact</p>
        </Link>
      
        </div>
        <button onClick={navbaropen}> <FaBars className='text-black text-2xl font-bold hidden sm:block  '/></button>
        </div>
        
            <Mobileheader navbaropen={navbaropen} open={open} />
          
    </motion.header>
  )
}

export default Header
