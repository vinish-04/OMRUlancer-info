import React from 'react'
import { BrowserRouter as Router,Routes,Route, useNavigate } from 'react-router-dom'
import VineCity from './pages/VineCity'
import Omrulancer from './pages/Omrulancer'
import Navbar from './components/re-usables/navbar/Navbar'
import './App.css'
import Footer from './components/re-usables/footer/Footer'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Omrulancer/>}/>
          <Route path='vineCity' element={<VineCity/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
   
  )
}

export default App