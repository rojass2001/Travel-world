import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
function Header() {
  const[open,setopen]=useState(false)
  const headerdiv="fixed flex pr-3 justify-between w-[97%] h-[50px] bg-white top-[20px] left-0 right-0 mx-auto items-center z-50 md:w-[100%] sm:w-[100%] top-[0px]"
 const navbars=()=>{
  setopen(!open)
 }
  return (
    <div>
      <div className={headerdiv}>
      <h2 className=' font-bold text-black text-2xl ml-3'>Travel</h2>
      <div className=' flex text-xl font-bold cursor-pointer space-x-7   '>
      <Link to='/'>
      <p className=' hover:bg-gray-400 px-2 md:hidden sm:hidden '>Home</p>
      </Link>
      <Link to='/gallery'>
      <p className=' hover:bg-gray-400 px-2 md:hidden sm:hidden'>Gallery</p>
      </Link>
      <Link to='/about'>
      <p className=' hover:bg-gray-400 px-2 md:hidden sm:hidden'>about</p>
      </Link>
      <Link to='/contact'>
      <p className=' hover:bg-gray-400 px-2 md:hidden sm:hidden '>Contact</p>
      </Link>
      <button onClick={navbars}> <FaBars className='text-black hidden sm:block md:block '/></button>
     
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
