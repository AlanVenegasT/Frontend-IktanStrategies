import { useEffect, useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio", href: "/" },
  // { name: "Soluciones", href: "#sec1" },
  // { name: "Areas", href: "#sec2" },
  { name: "Contacto", href: "/contacto" },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Clases tailwind
  const navEstilos1 = "font-roboto text-base font-bold text-black";
  const navEstilos2 = "font-roboto text-base font-bold text-white";
  useEffect(() => {
    // Funcion Flecha
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      // console.log(scrollTop);
      if (scrollTop > 200) {
        // cambia 100 por el número de píxeles que desees
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isMenuOpen
          ? "fixed bg-white shadow-lg w-full z-10 text-white"
          : "absolute bg-[#DD102A] w-full z-10 "
      } transition duration-500 ease-in-out`}
    >

      {/* :DESKTOP MENU */}
      <div className="mx-auto flex justify-between items-center px-16">
        {/* ::Site logo and Name */}
        <a
          href="/"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <span className="sr-only">IKTAN Strategies</span>
          <img
            className="h-16 w-auto"
            // src="https://imapowerplants.com/wp-content/uploads/2021/09/IMA_logo.png"
            src={
              isMenuOpen
                ? "LogoStrategies.png"
                : "LOGO IKTAN STRATEGIES blanco.png"
            }
            alt="IMA_logo"
          />
        </a>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              // className="text-base font-medium text-[#0000FF] hover:text-indigo-50"
              className={`mr-8 ${
                isMenuOpen ? navEstilos1 : navEstilos2
              } relative after:absolute ${
                isMenuOpen ? "after:bg-[#DD102A]" : "after:bg-gray-200"
              } after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#DD102A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-white bg-[#DD102A] hover:text-white hover:from-[#DD102A] hover:to-[#DD102A]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-50 text-base uppercase text-center font-semibold">
          {navigation.map((link) => (
            <a
              href={link.href}
              className={`block px-3 py-2 rounded-md hover:text-white hover:bg-[#DD102A] ${
                isMenuOpen ? navEstilos1 : navEstilos1
              }`}
              key={link.name}
            >
              {link.name}
            </a>
          ))}
          <p className="px-3 py-2 rounded-md text-white bg-[#DD102A] mt-5 flex items-center justify-center text-center">
            <span className="w-8 h-8">{<PhoneIcon />}</span>
            <span className="pl-3">(+52 1) 55-3717-1132</span>
          </p>
          <p className="px-3 py-2 rounded-md text-white bg-[#DD102A] mt-5 flex items-center justify-center text-center lowercase">
            <EnvelopeIcon
              className="h-8 w-8 flex-shrink-0"
              aria-hidden="true"
            />
            <span className="pl-3">
              mechanical.engineers@imapowerplants.com
            </span>
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;