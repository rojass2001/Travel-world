import React from 'react'
const images=['https://github.com/YousafKhan1/Images/blob/main/Images/gal1.jpg?raw=true',
  'https://github.com/YousafKhan1/Images/blob/main/Images/gal2.jpg?raw=true',
  'https://github.com/YousafKhan1/Images/blob/main/Images/gal3.png?raw=true',
  'https://github.com/YousafKhan1/Images/blob/main/Images/gal4.jpg?raw=true',
  'https://raw.githubusercontent.com/YousafKhan1/Images/refs/heads/main/Images/gal5.webp',
  'https://raw.githubusercontent.com/YousafKhan1/Images/refs/heads/main/Images/gal6.webp',
]
function Gallery() {
  return (
<div className='w-full mb-2 h-full'>
  <div className='h-96 bg-black bg-opacit-50  relative text-white font-bold  place-items-center
    place-content-center bg-center bg-cover mb-4 ' 
    style={{backgroundImage:"url('https://github.com/YousafKhan1/Images/blob/main/Images/hero.png?raw=true')" }}>
    <p className='text-white font-bold text-5xl'>Gallery</p>  
  </div>
    <div className='w-full  px-2 grid  grid-cols-3  gap-3 sm:grid-cols-1 md:grid-cols-2 '>
      {
        images.map((x)=>(
     <div className=''>
     <img className=' h-[200px] w-full'  src={x} alt="noimage"/>
  </div>
))}
    </div>
</div>
  )
}

export default Gallery
