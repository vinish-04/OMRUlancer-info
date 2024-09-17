import React, { useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const nav=useNavigate()
  const [navBg,setNavBg]=useState(false)

  const changeNavBg = () =>
    {
     window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
    }
  
    window.addEventListener('scroll', changeNavBg);
  return (
    <div className={navBg?'nav-main2':'nav-main'}>
      <div className="nav-sub-cont">
        <div className="nav-title-cont" onClick={()=>nav('/')}>
          <img src="om-real.jpeg" alt="omrulancer" className="nav-title-img" />
          <p className="nav-title-text">OMRUlancer</p>
        </div>
        <div className="nav-link-cont">
          <a href='/#about' onClick={()=>nav('/#about')} className="nav-link">About</a>
          <a href='/#features' onClick={()=>nav('/#features')} className="nav-link">Features</a>
          <p className="nav-link" onClick={()=>nav('/vineCity')}>Vine City</p>
        </div>
        <button className='nav-btn' onClick={()=>nav('/')}>Join us</button>
      </div>
      
    </div>
  )
}

export default Navbar