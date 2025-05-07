import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'
import { Contact } from 'lucide-react'
const Home = () => {
  return (
    <div>
      <Hero/>
    <About/>
    <Services/>
    <Packages/>
    <Booking/>
    <Testimonials/>
    <Contact/>
    </div>
  )
}

export default Home
