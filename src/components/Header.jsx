import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <>
    
    <nav className="bg-transparent fixed z-50  navbar w-full ">
        <div className="hidden lg:block xl:block  w-full px-2 sm:px-6 lg:px-0 ">
          <div className="relative flex h-26 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-row w-full  items-center justify-center sm:items-stretch sm:justify-start">
              {" "}
              {/*Div padre */}
              <div class="basis-3/6 ">
                {" "}
                {/*Div hijo1 */}

                <img
                  class="block h-20 w-auto lg:hidden py-6 px-4 lg:py-8 lg:px-4 xl:py-8 xl:px-4 xl:pl-32 "
                  src="LogoStrategies.png"
                  alt="Your Company"
                />
            

           
                <img
                  class="hidden h-20 w-auto  lg:block py-2 px-4 lg:py-2 lg:px-4 xl:py-2 xl:px-4 xl:pl-32"
                  src="LogoStrategies.png"
                  alt="Your Company"
                />
              
              </div>

              <div class="flex flex-col  sm:block basis-5/6">
                {/*Div hijo2 */}

                

                <div className="flex justify-between">
                  <div class="flex space-x-4 lg:py-6 xl:py-6">
                    <Link
                      to="/"
                      class="ml-20 text-white font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1 "
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <a
                      href="#PPCIEM"
                      class="text-white font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1"
                    >
                      PPCIEM
                    </a>
                    <a
                      href="#servicios"
                      class="text-white font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1 "
                    >
                      Servicios
                    </a>
                    <a
                      href="#contacto"
                      class="text-white font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-6 py-1 "
                    >
                      Contacto
                    </a>
                  </div>

                  <div className="pt-5 flex">
                    {/* 
                    <span class="hidden sm:block">
                      <a
                        href="/search"
                        class="block border-l-2 border-slate-200 mt-2 mr-8 py-4 lg:py-2 xl:py-4 pl-6  "
                      >
                        <svg
                          class="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <span class="sr-only"> Search </span>
                      </a>
                    </span> 
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md   px-6 py-0 my-2 mr-20 text-base font-medium bg-gradient-to-b from-[#0C6201] via-[#6FCC36] to-[#B7E163] text-white shadow-sm "
                    >
                      Button text
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>




      <Disclosure
        as="nav"
        className="bg-white shadow block lg:hidden xl:hidden "
      >
        {({ open }) => (
          <>

          <div className="flex flex-col">
            
          
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                  
                    <img
                      className="block h-2/3 w-auto lg:hidden"
                      src="LogoStrategies.png"
                      alt="Your Company"
                    />
                  
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <Link
                      to="/"
                      className="inline-flex items-center  ml-12 text-white font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-4 py-1 my-4"
                    >
                      Home
                    </Link>
                    <Link
                      to="#PPCIEM"
                      className="inline-flex items-center text-white font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-4 py-1 my-4 "
                    >
                      PPCIEM
                    </Link>
                    <Link
                      href="#servicios"
                      className="inline-flex items-center  text-white font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-4 py-1 my-4"
                    >
                      Servicios
                    </Link>
                    <Link
                      href="#contacto"
                      className="inline-flex items-center text-white font-medium hover:rounded-full hover:bg-[#091D3E] hover:text-white duration-700 px-4 py-1 my-4"
                    >
                      Contacto
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 pt-2  pb-3">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block border-l-4 border-green-500 bg-slate-100 py-2 pl-3 pr-4 text-base font-medium text-white sm:pl-5 sm:pr-6"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#PPCIEM"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  PPCIEM
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#servicios"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Servicios
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#contacto"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-white hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Contacto
                </Disclosure.Button>
              </div>
              
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};


export default Header