import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='w-full bg-gray-800   pt-6 md:pt-[120px]  '>
    <div className='w-full px-4 grid  grid-cols-3 sm:grid-cols-1  '>
     <div className='h-[150px]'>
    <h1 className='text-white text-2xl font-bold'>Travel Agency</h1>
<p className='text-white mt-[50px]'>your trusted partner for unforgettable travel experience.explore 
the world with us.</p>
    </div> 
    <div className='h-[200px]  '>
      <h1 className='text-white text-[20px]  font-bold'>quicklinks</h1>
<div className=' mt-7 text-white font-bold'>
<Link to='/'><p className='mb-2'>Home</p></Link>
<Link to='/gallery'><p className='mb-2' >Gallery</p></Link>
<Link to='/contact'><p className='mb-2' >Contact</p></Link>
<Link to='/about'><p className='mb-2' > About </p></Link>
</div>
</div> 
<div className='h-[200px]  text-center'>
<h1 className='text-white text-2xl font-bold ' >Follow us</h1>
<div className='w-full justify-center  flex space-x-3 mt-3 mx-auto mb-3 '>
 <FaFacebook size={30}className='text-blue-600 bg-gray-800'/>
 <FaInstagram size={32} className='text-red-900 '/>
 <FaTwitter size={32} className='text-blue-500 '/>
 <FaLinkedin size={32} className='text-blue-600 '/>
</div>
<div className='w-full h-[40px] border-red-300 flex justify-center '>
<input className='w-[70%] p-2 rounded-l-lg bg-gray-800 border border-gray-600' type="email" placeholder='Your Email' />
<button className='text-white font-semi-bold rounded-r-full border-2 border-blue-600  bg-blue-600'>Suscribe</button>
</div>

</div>
    </div>
    <div className='w-full px-6 flex justify-between bg-green h-[40px] sm:px-0 md:px-0'>
    <div className='text-sm bold text-white'>&copy; 2024 Travel Agency.All rights reserved.</div>  
    <div className='text-sm bold text-white'>privacy policy terms of services.</div>  
    </div>
    </div>
  )
}

export default Footer

