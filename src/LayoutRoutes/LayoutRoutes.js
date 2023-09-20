import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../components/pages/Plans/Plans'
import Courses from '../components/pages/Courses/Courses'
import AboutUs from '../components/pages/AboutUs/AboutUs'
import Contact from '../components/pages/ContactUs/Contact'
import Support from '../components/pages/Support/Support'
import Member from '../components/pages/Member/Member'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/EduMate-react-web' element={<Home/>}/>
            <Route path='/services' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/member' element={<Member/>}/>
            </Routes>
        <Footer/>
    </Router>
      
    
  )
}

export default LayoutRoutes