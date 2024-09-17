import React from 'react'
import Hero from '../components/omrulancer/hero/Hero'
import About from '../components/omrulancer/about/About'
import Terms from '../components/omrulancer/terms/Terms'
import Features from '../components/omrulancer/features/Features'

const Omrulancer = () => {
  return (
    <div className='page'>
      <Hero/>
      <About/>
      <Features/>
      {/* <Terms/> */}
    </div>
  )
}

export default Omrulancer