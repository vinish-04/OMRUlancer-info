import React from 'react'
import './hero.css'
import { FaDiscord, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='omr-hero-main'>
        <div className="omr-hero-title-cont">
            <div className="omr-hero-title">
                <img src="om-real.jpeg" alt="omrulancer" className="omr-hero-title-img" />
                <p className="omr-hero-title-text">OMRUlancer</p>
            </div>
            <p className="omr-hero-title-qoute">
            "Start you freelancing adventure with our community, Exploring all dimensions of success"
            </p>
        </div>
        <div className="omr-hero-social-cont">
            <p1 className="omr-hero-social-heading">
                Join our communities : 
            </p1>
            <div className="omr-hero-social-links">
                <FaSquareXTwitter className='omr-hero-social-link'/>
                <FaLinkedin className='omr-hero-social-link'/>
                <FaDiscord className='omr-hero-social-link'/>
            </div>
        </div>
    </div>
  )
}

export default Hero