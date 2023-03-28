import React from 'react'
import About from '../components/About'
import Busqueda from '../components/Busqueda'
import Elegirnos from '../components/Elegirnos'
import Estadisticas from '../components/Estadisticas'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
    
    <Hero/>
    <Logos/>
    <Services/>
    <Busqueda/>
    <About/>
    <Estadisticas/>
    <Elegirnos/>
    </>
  )
}

export default Home