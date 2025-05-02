import { images } from "../Components/Galleryarray" // Importing image array from a separate file

function Gallery() {
  return (
    <div className='w-full mb-2 h-full'>

      {/* Hero section with background image and title */}
      <div
        className='w-full h-[500px] md:h-[500px] text-white font-bold bg-center bg-cover mb-7 flex items-center justify-center place-content-center sm:h-96'
        style={{
          backgroundImage: "url('https://github.com/YousafKhan1/Images/blob/main/Images/hero.png?raw=true')"
        }}
      >
        <div className='text-white font-bold text-5xl'>Gallery</div>
      </div>

      {/* Gallery image grid */}
      <div className='w-full px-2 grid grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2'>
        {images.map((x, index) => (
          <div key={index} className=''>
            {/* Each image with fixed height and responsive width */}
            <img className='h-[200px] w-full object-cover' src={x} alt="Gallery item" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Gallery // Exporting the Gallery component
