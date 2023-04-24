import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive'

const people = [
    {
      name: 'Seguros',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'seguros.png',
    },
    {
      name: 'PPCIEM',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'PPCIEM.jpg',
    },
    {
      name: 'Dictaminación de Pozos',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'DICTAMINACION.jpg',
    },
    {
      name: 'Gestión Regulatoria',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'gESTIONREGULATORIA.jpg',
    },
    {
      name: 'Auditorias',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'AUDITORIAS.jpg',
    },
    {
      name: 'Capacitación',
      email: 'leslie.alexander@example.com',
      imageUrl:
        'capacitacion.png',
    },
      
  ]

const Services = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktopOrLaptop ? 5 : 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  return (
    <>
    <div>
      <div>
        <h2 className='text-[#DD102A] text-center text-sm '>Servicios</h2>
        <h3 className=' text-center text-3xl font-extrabold pb-5 pt-3 '>What We Offer</h3>
        <p className=' text-center pb-8 px-0 md:px-64 lg:px-64 xl:px-64'>Quis ipsum gravida. Accumsan lacus vel facilisis dolore magna aliqua lacus dolor sit amet, consectetur adipiscing elitd do.</p>
      </div>
      <div className=' mx-20'>
      <Slider {...settings}>
        {people.map((person) => (
          <div key={person.email} > 
            <div className="relative flex flex-col items-center space-x-3  border border-gray-300 bg-white px-2 mx-6 py-5 shadow-sm focus-within:ring-2  focus-within:ring-offset-2 hover:border-gray-400">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <a  className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-lightm text-gray-900 text-center pt-2">{person.name}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    </>
  )
}

export default Services