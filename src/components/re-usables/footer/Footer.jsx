import React from 'react'
import './footer.css'
import { FaDiscord, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className="footer-sub-cont">
            <div className="ft-title-cont">
                <img src="om-real.jpeg" alt="omrulancer" className="ft-title-img" />
                <p className="ft-title-text">OMRUlancer</p>
            </div>
            <div className="ft-text">
                OMRUlancer is a dynamic freelancing platform that connects skilled freelancers with bounty providers, who are individuals or organizations listing jobs and gigs on the platform. We are looking for user feedbacks and reviews, feel free to join our discord server and suggest features and improvements which can raise our project to new heights         
            </div>
        </div>
        <div className="ft-social-cont">
            <FaSquareXTwitter className='ft-social-icon'/>
            <FaLinkedin className='ft-social-icon'/>
            <FaDiscord className='ft-social-icon'/>
        </div>
        <p className="ft-copyright">
            Copyright@{new Date().getFullYear()} - Vinish
        </p>
    </div>
  )
}

export default Footer