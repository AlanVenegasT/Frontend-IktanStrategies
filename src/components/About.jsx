
import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const About = () => {

  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 3000,
      origin: 'left',
      distance: '400px'

    });
  }, []);  

  return (
    <>
    <div ref={revealRef}>
    <div className="bg-white py-0 sm:py-0 ">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 py-16 px-6 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-12 xl:gap-x-20 xl:px-20">
            <img
              className="h-60 w-full sm:h-96 sm:w-full flex-none rounded-2xl object-cover  object-center shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm md:ml-0 lg:ml-10 xl:ml-10"
              src="Plantamar.jpg"
              alt=""
            />
            <div className="w-full flex-auto">
            <h2 className='text-[#DD102A] text-start text-sm '>Conocenos</h2>
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">¿QUIENES SOMOS?</h2>
              <p className="mt-6 mb-6 text-sm leading-6 text-black text-justify">
              En Iktan Strategies somos la historia de nuestra gente, trabajo duro, retos y éxitos forjaron nuestro espíritu de 
              excelencia. Los que formamos Iktan Strategies conocemos el sector energético de México y nos desenvolvemos con 
              soltura no solo porque es nuestro trabajo diario, sino porque nosotros ayudamos a construirlo y lo consideramos nuestro.
              </p>
                {/* <button
                    type="button"
                    className="rounded-md bg-[#DD102A] py-2.5 px-8 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Discover More
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default About