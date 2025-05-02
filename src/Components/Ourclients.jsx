import { clients } from './Clientarray'; // Importing client data from an array

function Ourclients() {
  return (
    // Main container with padding
    <div className='w-full py-9'>
      
      {/* Section title */}
      <p className='mx-auto text-black text-3xl mb-5 font-bold'>Our clients Says</p>
      
      {/* Grid layout for client cards, responsive for small and medium screens */}
      <div className='w-full px-4 py-2 grid gap-[20px] grid-cols-3 sm:grid-cols-1 md:grid-cols-1'>

        {/* Looping through the clients array to render each client's testimonial */}
        {clients.map((client) => (
          <div 
            className='h-[220px] pt-2 px-1 transform transition duration-300 hover:scale-105 bg-white shadow-sm shadow-gray-300 cursor-pointer'
            key={client.image} // Using image URL as key assuming it's unique
          >
            {/* Client photo */}
            <img 
              className='w-[80px] h-[80px] mx-auto rounded-full' 
              src={client.image} 
              alt={client.name} 
            />
            
            {/* Client name */}
            <p className='font-bold text-black text-xl'>{client.name}</p>

            {/* Client location */}
            <p>{client.place}</p>

            {/* Client description or testimonial */}
            <p className='italic'>{client.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourclients;
