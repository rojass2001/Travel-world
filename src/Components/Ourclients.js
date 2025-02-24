import React from 'react'
const clients=[{image:'https://github.com/YousafKhan1/Images/blob/main/Images/me.png?raw=true', name:'John Doe',
      place:'New York, USA' ,
      des:'This Travel Agency provided excellent service and helped us plan the perfect vacation Highly recommend!'  },
    { image:'https://github.com/YousafKhan1/Images/blob/main/Images/me2.png?raw=true',name:'Jane Smith',
      place:'London, UK',
      des:'Amazing experience! the tout guides were knowledgeable and the destinations were breathtaking '},
    {image:'https://github.com/YousafKhan1/Images/blob/main/Images/me2.png?raw=true',name:'Rojas cherian',
      place:'Sydney, Australia',
      des:'Great customer service and fantastic travel packages. will defenitly book with them again'},
  ]
function Ourclients() {
  return (
    <div className='w-full py-9 '>
        <p className='mx-auto text-black text-3xl font-bold'>Our clients Says</p>
        <div className='w-full px-4 py-2 grid gap-[20px] grid-cols-3 sm:grid-cols-1 md:grid-cols-1'>
      {
     clients.map((a,c)=>(
    <div className='h-[220px] pt-2 px-1 transform transition duration-300 hover:scale-105 
     bg-white shadow-sm shadow-gray-300  cursor-pointer'>
   <img className='w-[80px] h-[80px] mx-auto rounded-full' src= {a.image} alt="no image"/>
    <p className='font-bold text-black text-xl'>{a.name}</p>
    <p>{a.place}</p>
    <p className='italic'>{a.des}</p>
    </div>
))
}
</div>
    </div>
  )
}

export default Ourclients
