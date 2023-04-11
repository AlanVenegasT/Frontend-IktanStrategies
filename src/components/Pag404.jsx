import React from 'react'

const Pag404 = () => {
  return (
    <>
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-60 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#DD102A] ">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Esta página no existe, si crees que esto se trata de un error comunnicate con soporte</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="duration-700 hover:scale-110  rounded-md bg-[#DD102A] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DD102A]"
            >
              Regresa a inicio
            </a>
            <a href="/" className="text-sm font-semibold text-gray-900">
              Contacta a soporte <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Pag404