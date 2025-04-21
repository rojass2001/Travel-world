import { images } from "../Components/Galleryarray"

function Gallery() {
  return (
  <div className='w-full mb-2 h-full'>
    <div className='w-full h-[500px] md:h-[500px] text-white font-bold bg-center bg-cover mb-7 flex items-center justify-center place-content-center sm:h-96' 
        style={{backgroundImage:"url('https://github.com/YousafKhan1/Images/blob/main/Images/hero.png?raw=true')" }}>
        <div className='text-white font-bold text-5xl'>Gallery</div>  
    </div>
    <div className='w-full  px-2 grid  grid-cols-3  gap-3 sm:grid-cols-1 md:grid-cols-2 '>
        {images.map((x)=>(
          <div className=''>
          <img className=' h-[200px] w-full'  src={x} alt="noimage"/>
          </div>
        ))}
    </div>
  </div>
  )
}

export default Gallery
