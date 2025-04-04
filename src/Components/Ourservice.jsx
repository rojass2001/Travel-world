import React from 'react'
import { services } from './Servicearray'
function Ourservice() {
  return (
    <div className='w-full mt-3  '>
          <p className='text-3xl font-bold text-black mb-5'>Our service</p>
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
