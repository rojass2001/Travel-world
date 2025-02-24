import React from 'react'
const feature=[{image:'https://github.com/YousafKhan1/Images/blob/main/Images/gal1.jpg?raw=true', name:'Paris',
    des:'thecity of lights draws million of visitors every year with its unforgettable ambiance'  },
    {image:'https://github.com/YousafKhan1/Images/blob/main/Images/gal2.jpg?raw=true',name:'bali,indonesia',
      des:'Bali is a living postcard, an indonesian paradise that feels like afantasy'},
    {image:'https://github.com/YousafKhan1/Images/blob/main/Images/gal3.png?raw=true',name:'New york,USA',
      des:'Newyork city is the largest city in the united states and home to manyworld-famous attraction '},
    {image:'https://github.com/YousafKhan1/Images/blob/main/Images/gal4.jpg?raw=true', name:'Tokyo,Japan',
      des:'Tokyo offers a seemingly unlimited choice of entertainment shopping,cultural attractions,and training'}
  ]
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
