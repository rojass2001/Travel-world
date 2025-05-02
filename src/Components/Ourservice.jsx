import { services } from './Servicearray'; // Importing the array of services

function Ourservice() {
  return (
    // Main wrapper div with full width and top margin
    <div className='w-full mt-3'>

      {/* Section heading */}
      <p className='text-3xl font-bold text-black mb-5'>Our service</p>

      {/* Grid container for service cards, responsive for small and medium screens */}
      <div className='w-full px-[25px] py-[10px] gap-[15px] text-center grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2'>

        {/* Looping through services array to display each service */}
        {
          services.map((a, c) => (
            <div 
              className='h-[170px] px-1 cursor-pointer bg-white shadow-xl shadow-gray-300 transform transition duration-300 hover:scale-105' 
              key={c} // Using index as key (can be replaced with a unique ID if available)
            >
              {/* Service icon */}
              <p>{a.icon}</p>

              {/* Service name/title */}
              <p className='font-bold text-black text-xl'>{a.name}</p>

              {/* Description of the service */}
              <p>{a.service}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Ourservice;
