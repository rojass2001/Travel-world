import React from 'react'
import{FaPlane,FaHotel,FaUmbrellaBeach,FaConciergeBell,}from 'react-icons/fa'
const services=[{icon:<FaPlane className='text-4xl mx-auto text-blue-500'/>,
   name:'Flight Booking',
   service:'we provide easy and quick flight booking services to make your travel hassle-free'},
   {icon:<FaHotel className='text-4xl mx-auto text-blue-500'/>,
   name:'Hotel Booking',service:'Book hotels at the best prices with our exclusive deals and discounts'},
   {icon:<FaUmbrellaBeach className='text-4xl mx-auto text-blue-500'/>,
   name:'Beach Tours', service: 'Enjoy relaxing beach tours with all-inclusive packages and guided tours'},
   {icon:<FaConciergeBell className='text-4xl mx-auto text-blue-500'/>,
   name:'Concierge Services', service: 'Get personalized concierge servicesfor a seamless travel experience'},
    ]
function Ourservice() {
  return (
    <div className='w-full mt-3  '>
    <p className='text-3xl font-bold text-black mb-2'>Our service</p>
    <div className='w-full px-[25px] py-[10px] gap-[15px] text-center grid grid-cols-4 
    sm:grid-cols-1 md:grid-cols-2'>
{
     services.map((a,c)=>(
    <div className='h-[170px]  px-1 cursor-pointer bg-white shadow-xl shadow-gray-300
     transform transition duration-300 hover:scale-105'>
    <p>{a.icon}</p>
    <p className='font-bold text-black text-xl'>{a.name}</p>
    <p>{a.service}</p>
    </div>
))
}
      </div>
    </div>
  )
}

export default Ourservice
