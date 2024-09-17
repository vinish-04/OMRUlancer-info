import React from 'react'
import './about.css'
import { FaArrowRightLong } from 'react-icons/fa6'

const paras=[
    "OMRUlancer is a dynamic freelancing platform that connects skilled freelancers with bounty providers, who are individuals or organizations listing jobs and gigs on the platform. The platform is built on a decentralized ecosystem that empowers users by offering a flexible, fluid environment for talent exchange. ",
    "There are two types of user, Freelancers and bounty providers. Bounty providers list gigs/bouties and freelancer apply for them. Freelancers can not only take on tasks but also evolve into bounty providers whenever they choose, allowing for greater autonomy and opportunities for both sides of the marketplace. The more projects a freelancer completes, the more karma points they earn, unlocking access to higher-level gigs and greater opportunities within the platform. This reputation system is designed to promote trust, transparency, and merit-based success.",
    "OMRUlancer features a validator system for verifying the profiles of bounty providers. Currently, this verification is conducted by freelancers themselves, with three independent verifications required to approve a new bounty provider. This peer-based validation ensures that the platform remains transparent and fair, while freelancers are rewarded with platform bounties for participating in the validation process. ",
    "In order to maintain a trusted and reliable ecosystem, OMRUlancer features a validator system for verifying the profiles of bounty providers. Currently, this verification is conducted by freelancers themselves, with three independent verifications required to approve a new bounty provider. This peer-based validation ensures that the platform remains transparent and fair, while freelancers are rewarded with platform bounties for participating in the validation process. Validators play a key role in building trust within the community, ensuring that bounty providers are genuine and reliable."
]

const About = () => {
  return (
    <div className='omr-about-main' id='about'>
        <p className="omra-title">
            What is OMRUlancer ?
        </p>
        <div className="omra-point-cont">
            {
                paras?.map((para,index)=>(
                    <div className="omra-point-item" key={index}>
                        <FaArrowRightLong  className='omra-point-icon'/>
                        <p className="omra-point-text">
                            {para}
                        </p>
                    </div>
                ))
            }           
        </div>
    </div>
  )
}

export default About