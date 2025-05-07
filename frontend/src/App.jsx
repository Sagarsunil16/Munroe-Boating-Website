import React from 'react'
import Home from './pages/Home'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
