import Destination from '../Components/Destination'; // Importing Destination section
import Ourservice from '../Components/Ourservice';    // Importing Services section
import Ourclients from '../Components/Ourclients';    // Importing Clients/Testimonials section

// Tailwind CSS classes for the home hero section and button
const homediv = 'h-screen relative bg-center bg-cover';
const button = 'border-2 mb-2 w-[130px] p-1 text-xl outline-none rounded-full mt-2 border-white';

function Home() {
  return (
    <div className='w-full'>

      {/* Hero section with background image and overlay text */}
      <div
        className={homediv}
        style={{
          backgroundImage: `url('https://github.com/YousafKhan1/Images/blob/main/Images/hero.png?raw=true')`
        }}
      >
        {/* Overlay content centered on the screen */}
        <div className='font-bold items-center justify-center absolute inset-0 text-center bg-black bg-opacity-50 flex flex-col gap-[10px] text-white w-[100%]'>
          <p className='text-5xl'>Explore the world with us</p>
          <p className='text-2xl'>Discover amazing places at exclusive deals</p>
          <button className={button}>Get Started</button>
        </div>
      </div>

      {/* Additional sections below hero */}
      <Destination />  {/* Renders destination cards or carousel */}
      <Ourservice />   {/* Renders list of services offered */}
      <Ourclients />   {/* Renders client testimonials */}
    </div>
  )
}

export default Home; // Exporting the Home component
