import React from 'react'
import { FaEnvelope,FaPhoneAlt ,FaMapMarkerAlt, } from 'react-icons/fa'
function About() {
  return (
<div className='w-full '>
    <div className='w-full h-[500px] md:h-[500px]     text-white font-bold 
     bg-center bg-cover mb-7  flex items-center justify-center place-content-center sm:h-96' 
    style={{backgroundImage:"url('https://github.com/YousafKhan1/Images/blob/main/Images/hero.png?raw=true')" }}>
    <div className='text-white font-bold text-5xl'>About</div>  
    </div>

    <div className='w-full  px-4 flex  py-3 mb-3 gap-[20px]'>
    <div className='min-h-[350px] sm:hidden'>
    <img className='w-full h-full' src="https://github.com/YousafKhan1/Images/blob/main/Images/hero.png?raw=true" />
    </div>

    <div className='min-h-[350px] text-black shadow-md shadow-gray-600 p-3 '>
    <p className='text-2xl font-bold pt-3'>Who We Are</p>
    <p className='text-sm mt-2 leading-loose'>We are a passionate travel agency commited to providing the best travel
     experiences for our clients. Our 
     team of dedicated professionals works tirelessly to ensure your trips are seamless and unforgettable
    </p>
    <p className='text-2xl font-bold pt-3 mt-3'>Our Mission</p>
    <p className='text-sm bold mt-2 leading-loose'>Our mission is create amazing travel experiences that inspire and 
        enrich the lives of our clients. We believe in personalized service attention to 
        detail and providing exceptional value
    </p>
    </div>
    </div>
    


</div>
  )
}

export default About
