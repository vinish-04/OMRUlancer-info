import React from 'react'
import './features.css'
import { FaSuitcase } from 'react-icons/fa6'
import { GiSevenPointedStar } from 'react-icons/gi'
import { GrUserWorker } from 'react-icons/gr'

const benefitsFreelancer=[
  "100% Verified job listings, no scams",
  "Verified bounty providers with trustless verification",
  "Escrow system to avoid payment related issues",
  "Job selection and sorting for different payment types",
  "Proper communication tools with bounty provider"
]
const benefitsProviders=[
  "Payment option customization with multiple options",
  "Full control on payments till the service is provided",
  "Controlled selection of freelancers for jobs",
  "Payment return policy without platform fees deduction",
  "Featuring web3 jobs on the platform to support ecosystems"
]

const Features = () => {
  return (
    <div className='omr-features-main' id='features'>
      <div className="omrf-cont">
        <div className="omrf-title-cont">
          <h1 className="omrf-title">
            What's in it for me ?
          </h1>
        </div>
        <div className="omrf-card-cont">
          {/* provider card  */}
          <div className="omrf-card">
            <div className="omrf-card-head">
              <FaSuitcase className="omrf-card-icon"/>
              <p className="omrf-card-title">Bounty Providers</p>
            </div>
            <div className="omrf-card-point-cont">
              {
                benefitsProviders?.map((point,index)=>(
                  <div className="omrf-card-point" key={index}>
                    <GiSevenPointedStar className='omrf-card-pointer'/>
                    <p className="omrf-card-point-text">
                      {point}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
          {/* freelancer card  */}
          <div className="omrf-card">
            <div className="omrf-card-head">
            <GrUserWorker className="omrf-card-icon"/>
              <p className="omrf-card-title">Freelancers</p>
            </div>
            <div className="omrf-card-point-cont">
              {
                benefitsFreelancer?.map((point,index)=>(
                  <div className="omrf-card-point" key={index}>
                    <GiSevenPointedStar className='omrf-card-pointer'/>
                    <p className="omrf-card-point-text">
                      {point}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features