import React from 'react'
import { Link } from "react-router-dom";

const Logos = () => {
  return (
    <>
        <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 shadow-lg pb-5">
      <h3 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by over <span className=' text-[#DD102A] text-sm '> 13, 041+ </span> happy customers, including
        </h3>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Link to="">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-700 hover:scale-110"
            src="LOGO IKTAN AMBIENTAL.png"
            alt="Transistor"
            width={158}
            height={48}
          />
          </Link>
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-700 hover:scale-110"
            src="LOGO IKTAN TECHNOLOGIES.jpg"
            alt="Reform"
            width={158}
            height={48}
          />
          <Link to="https://iktantraining.com/">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 duration-700 hover:scale-110"
            src="LOGO IKTAN TRAINING (1).png"
            alt="Tuple"
            width={158}
            height={48}
          />
          </Link>
          <Link to="https://iktanprotect.com/">
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 duration-700 hover:scale-110"
            src="undefined - Imgur.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          </Link>
          <Link to="https://iktanstrategies.com/">
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 duration-700 hover:scale-110"
            src="LOGO IKTAN STRATEGIES.jpg"
            alt="Statamic"
            width={158}
            height={48}
          />
          </Link>
        </div>
      </div>
    </div>

    </>
  )
}

export default Logos