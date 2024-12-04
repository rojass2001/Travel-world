import React from 'react'
import Destination from './Destination';
import Ourservice from'./Ourservice'
import Ourclients from './Ourclients';
const homediv='h-screen bg-black bg-opacity-50  relative text-white font-bold  place-items-center place-content-center bg-center bg-cover';
 const button='border-2 mb-2 w-[130px] p-1 text-xl outline-none rounded-full  mt-2 border-white ';
function Home() {
  return (
    <div>
  <div className={homediv}
    style={{backgroundImage:"url('https://github.com/YousafKhan1/Images/blob/main/Images/hero.png?raw=true')" }}>
<div className='font-bold items-center justify-center gap-[20px] text-center
 bg-black bg-opacity-50 flex flex-col text-white w-[80%] sm:w-[80%]'>
    <p className='text-5xl '>explore the world with us</p> 
    <p className='text-2xl '>discover amazing places at exclusive deals</p>
  <button className={button}>Get Started</button>
  </div>
  </div>
  <Destination/>
  <Ourservice/>
  <Ourclients/>
  </div>

  )
}
export default Home
