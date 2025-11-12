import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/Service'
import Service2 from './Components/Service2'
import Doctor from './Components/Doctor'
import Testimonial from './Components/Testimonial'
import Blogs from './Components/Blogs'
import Questions from './Components/Questions'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Service />
    <Service2 />
    <Doctor />
    <Testimonial />
    <Blogs />
    <Questions />

    <Contacts />
    <Footer />
    </>
  )
}

export default App