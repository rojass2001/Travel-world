import { FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell, } from 'react-icons/fa'

export const services = [
    {
      icon: <FaPlane className='text-4xl mx-auto text-blue-500' />,
      name:'Flight Booking',
      service: 'we provide easy and quick flight booking services to make your travel hassle-free'
    },
    {
      icon: <FaHotel className='text-4xl mx-auto text-blue-500' />,
      name: 'Hotel Booking',
      service: 'Book hotels at the best prices with our exclusive deals and discounts'
    },
    {
      icon: <FaUmbrellaBeach className='text-4xl mx-auto text-blue-500' />,
      name: 'Beach Tours',
      service: 'Enjoy relaxing beach tours with all-inclusive packages and guided tours'
    },
    {
      icon: <FaConciergeBell className='text-4xl mx-auto text-blue-500' />,
      name: 'Concierge Services',
      service: 'Get personalized concierge servicesfor a seamless travel experience'
    },
    ]