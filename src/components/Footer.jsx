const navigation = {
  solutions: [
    { name: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi dignissimos accusamus quisquam maxime, id nemo reprehenderit!. ", href: "#" },
    
  ],
  support: [
    { name: "250 Northern Blvd Suite 324-1033 Albany, Ny 124-1200", href: "#" },
    { name: "+123 456 789 00", href: "#" },
    { name: " Contact Us", href: "#" },
  ],
  company: [
    { name: "Featuret", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog Post", href: "#" },
    { name: "Help & Support", href: "#" },
  ],
  legal: [
    { name: "About us", href: "#" },
    { name: "Our clients", href: "#" },
    { name: "Legal notic", href: "#" },
  ],
  emailc: [
    { name: "", href: "#" },
  ],
  
};

const Footer = () => {
  return (
    <>
    <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 lg:px-20">
            <div className="xl:grid xl:grid-cols-2 text-center">
              <div className="mt-16 grid grid-cols-2 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold leading-6 text-left">Iktan Strategies</h3>
                    <ul role="list" className="mt-6 space-y-4 text-left pr-20 ">
                      {navigation.solutions.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-xs leading-0 text-gray-900 hover:text-black "
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-bold leading-6 text-left">Contacto</h3>
                    <ul role="list" className="mt-6 space-y-4 text-left  mr-20">
                      {navigation.support.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-xs leading-0 text-gray-900 hover:text-black "
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-3">
                  <div>
                    <h3 className="text-sm font-bold leading-6 text-left">Viewer guides</h3>
                    <ul role="list" className="mt-6 space-y-4 text-left">
                      {navigation.company.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-xs leading-0 text-gray-900 hover:text-black"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-bold leading-6 text-left">Community</h3>
                    <ul role="list" className="mt-6 space-y-4 text-left">
                      {navigation.legal.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-900 hover:text-black"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-bold leading-6">Sign up for monthly newsletter</h3>
                    <ul role="list" className="mt-6 space-y-4 text-left">
                      {navigation.emailc.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-900 hover:text-black"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#181818]">
          {/* PARTE DE HASTA ABAJO */}
          <div className="py-4 text-center">
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2023 Iktan Strategies, Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
  
  

export default Footer