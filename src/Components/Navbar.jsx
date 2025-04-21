import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Drawer from './Mobiledrawer'
 const headerdiv="fixed flex px-3 justify-between bg-white shadow-md shadow-gray-300 no-underline w-[98%] h-[55px] bg-white top-[20px] top-0 left-0 right-0 mx-auto items-center z-50  "
const navlink = " hover:bg-gray-400"

function Navbar() {
  const[open,setopen]=useState(false)
  const navbaropen=()=>{ setopen(!open) }
  return (
   <motion.nav className={headerdiv}>
      <h2 className="text-2xl font-bold">Travel</h2>
      <div className='flex items-center '>
        <div className="flex  text-xl font-bold cursor-pointer space-x-7  sm:hidden">
          <Link to='/' className={navlink}>Home</Link>
          <Link to='/gallery' className={navlink}>Gallery</Link>
          <Link to='/about' className={navlink}>about</Link>
          <Link to='/contact' className={navlink}>Contact</Link>
        </div>
        <button onClick={navbaropen}> <FaBars className='text-black text-2xl font-bold hidden sm:block  '/></button>
      </div>
      <Drawer navbaropen={navbaropen} open={open} />    
   </motion.nav>
  )
}

export default Navbar
