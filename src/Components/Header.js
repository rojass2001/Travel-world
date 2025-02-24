import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
 const headerdiv="fixed flex px-3 justify-between  w-[98%] h-[55px] bg-white top-[20px] top-0 left-0 right-0 mx-auto items-center z-50  "
const navlink=" hover:bg-gray-400    "
 function Header() {
  const[open,setopen]=useState(false)
 
 const navbars=()=>{
  setopen(!open)
 }
  return (
    <div>
      <div className={headerdiv}>
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
      <button onClick={navbars}> <FaBars className='text-black text-2xl font-bold hidden sm:block  '/></button>
      </div>
       {open&&
      <div className=' hidden rounded-xl shadow-md shadow-gray-300 w-[calc(100%-40px)] h-[400px] bg-gray-400  absolute top-[60px] 
       mr-[20px] ml-[20px] text-xl font-bold cursor-pointer space-x-7 sm:block md:block items-center content-center  '>
         <Link to='/'>
      <p onClick={navbars}className=' px-2  '>Home</p>
      </Link>
      <Link to='/gallery'>
      <p onClick={navbars} className=' px-2 '>Gallery</p>
      </Link>
      <Link to='/about'>
      <p onClick={navbars} className=' px-2 '>about</p>
      </Link>
      <Link to='/contact'>
      <p onClick={navbars}className=' px-2  '>Contact</p>
      </Link>
      </div>
}
      </div>
    </div>
  )
}

export default Header
