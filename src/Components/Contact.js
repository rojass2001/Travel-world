import React from 'react'
import { FaEnvelope,FaPhoneAlt ,FaMapMarkerAlt, } from 'react-icons/fa'
function Contact() {
  return (
    <div className='w-full  '>
    <div className='h-96  bg-black bg-opacity-50  relative text-white font-bold  place-items-center
    place-content-center bg-center bg-cover mb-7 ' 
 style={{backgroundImage:"url('https://github.com/YousafKhan1/Images/blob/main/Images/hero.png?raw=true')" }}>
    <p className='text-white font-bold text-5xl'>Contact</p>  
    </div>
    <div className='w-full  px-4 grid grid-cols-2 mb-3 sm:grid-cols-1  gap-[20px]  md:gap-[30px]'>
<div className='h-[280px] space-y-2 text-start shadow-md shadow-gray-400  '>
  <div className='w-full mb-6 text-center'> <p className='text-black text-xl font-bold  '>Contact details</p></div>

<div className='w-full space-y-3 pt-2'>
<div className='w-full flex place-items-center  gap-1'>
    <FaEnvelope className='text-blue-600'/>info@Travel Agency.commm</div>
    <div className='w-full flex place-items-center gap-1'>
    <FaPhoneAlt className='text-blue-600'/>+123 456 789</div> 
    <div className='w-full flex place-items-center gap-1'>
    <FaMapMarkerAlt className='text-blue-600'/>kerala st.marys church</div> 
    </div>  
    
    </div>
     <div className='h-[280px] text-start text-black shadow-md shadow-gray-400  '>
   
    <p className='text-center font-bold text-xl'> Get in Contact</p>
   <p>Name</p>
   <input className='w-[100%] h-[35px] border border-gray-400' type='text' placeholder='Enter Name'/>
   <p>Email</p>
   <input className='w-[100%] h-[35px] border border-gray-400' type='text' placeholder='Enter Email'/>
   <p>Message</p>
   <textarea  className='w-full border decoration-none h-[60px] border-gray-400' placeholder='write message'></textarea>
   <button className='bg-blue-600 px-2 mt-1 h-[35px] text-white text-sm'>Send Message</button>
     </div>
    </div>
    


</div>
  )
}

export default Contact
