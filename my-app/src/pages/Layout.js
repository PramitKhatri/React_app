import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Layouts = () => {
  return (
    <>
    {/* Outlet makes it so that the header element is read first and then outlet and footer, this helps in puttiong anything in outlet so that header and footer comes on ecery pase that is routed in route element'={layouts} */}
    <Header/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layouts