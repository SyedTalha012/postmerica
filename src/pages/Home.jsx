import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'


const Home = () => {

  return (

    <div className='min-h-[100vh] overflow-y-auto'>
      
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Newsletter/>
      <Faqs/>
      <Footer/>
    </div>


  )
}

export default Home