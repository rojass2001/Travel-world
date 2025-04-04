import React from 'react'
import { feature } from './destinationarray';

function Destination() {
  return (
    <div className='w-full px-3 py-12 bg-white'>
        <h3 className='text-black font-bold mb-6 text-3xl '>Featured Destination</h3>
        <div className='w-full px-2  grid gap-[10px] grid-cols-4 sm:grid-cols-1 md:grid-cols-2   '>
       {
    feature.map((a,c)=>(
  <div className=' h-[250px] object-cover shadow-lg shadow-gray-300  '>
    <img className='w-full h-[50%] object-fill cursor-pointer transform transition duration-300 hover:scale-105'src={a.image} alt="gfff"/>
    <p className='mb-1 font-bold text-2xl sm:text-1xl'>{a.name}</p>
    <p>{a.des}</p>
  </div>
   ))
}
</div>
    </div>
  )
}

export default Destination
