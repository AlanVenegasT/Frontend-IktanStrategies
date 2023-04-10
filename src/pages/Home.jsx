import React from 'react'
import About from '../components/About'
import Blog from '../components/Blog'
import Busqueda from '../components/Busqueda'
import Elegirnos from '../components/Elegirnos'
import Estadisticas from '../components/Estadisticas'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Services from '../components/Services'
import Testimaniales from '../components/Testimaniales'

const Home = () => {
  return (
    <>
    
    {/* <Hero/> */}
    <Logos/>
    <Services/>
    <Busqueda/>
    <About/>
    <Estadisticas/>
    <Elegirnos/>
    <Testimaniales/>
    <Blog/>   
    </>
  )
}

export default Home