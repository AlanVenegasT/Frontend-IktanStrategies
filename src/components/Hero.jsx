import React from 'react'
import "../css/Fondo.css";

const Hero = () => {
  return (
    <>
      <header class='container'>
        <div class='wave'>
        </div>

        <div className='absolute top-1/3  '>
          <h2 className='text-4xl font-extrabold text-white ml-32'>We are The Brilliants In </h2>
          <h2 className='text-4xl font-extrabold text-white ml-32'>Terms Of Digital</h2>
          <h2 className='text-4xl font-extrabold text-white ml-32'>Marketinng</h2>
          <h3 className='text-white ml-32 mt-6'>Book your 30-minute free strategy call</h3>

          <button
            type="button"
            className="ml-32 mt-6 rounded-md bg-white py-2.5 px-3.5 text-sm font-normal text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Button text
          </button>

        </div>
      </header>
    </>
  )
}

export default Hero