import { clients } from './Clientarray'

function Ourclients() {
  return (
  <div className='w-full py-9 '>
    <p className='mx-auto text-black text-3xl mb-5 font-bold'>Our clients Says</p>
     <div className='w-full px-4 py-2 grid gap-[20px] grid-cols-3 sm:grid-cols-1 md:grid-cols-1'>
        { clients.map((client)=>(
        <div className='h-[220px] pt-2 px-1 transform transition duration-300 hover:scale-105 bg-white shadow-sm shadow-gray-300  cursor-pointer' key={client.image}>
          <img className='w-[80px] h-[80px] mx-auto rounded-full' src= {client.image} alt={client.name}/>
          <p className='font-bold text-black text-xl'>{client.name}</p>
          <p>{client.place}</p>
          <p className='italic'>{client.des}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Ourclients
