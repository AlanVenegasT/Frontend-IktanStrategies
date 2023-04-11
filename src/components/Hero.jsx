import React from 'react'


const Hero = () => {
  return (
    <>
     <div className="relative bg-[#DD102A] flex  items-center h-screen">
      <div className='flex flex-col pl-10'>
      <h1 className="text-white text-4xl font-bold w-96 mb-2 ">We are The Brilliants In Terms Of Digital Marketing</h1>
      <h2 className='text-white text-2xl mb-10'>Book your 30-minute free strategy call</h2>
      <button
        type="button"
        className="rounded-md bg-white px-3.5 py-2.5 w-28 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
      </button>
      </div>
      <img src="wave.png" alt="Imagen" className="absolute bottom-0 w-full object-contain"/>
    </div>
    </>
  )
}

export default Hero