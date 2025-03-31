import CtaBtnSecondary from '../button/CtaBtnSecondary'
import CtaButton from '../button/CtaButton'
import HeroPic from '../heroPic/HeroPic'
import LandingPageText from '../hero/LandingPageText.jsx'
import React from 'react'
import classes from './landing.module.css'

function LandingPage() {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1C1C1C] relative flex items-center justify-center overflow-hidden z-0 w-[95%] m-[auto] max-w-[1600px] ">
      <div className="relative mx-auto h-full px-4  pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex items-center justify-around lg:flex-row py-20 pt-10 ml-7 sm:block sm:flex-1">
          <div className=" relative flex-[0.5] ">
            
            <div className="lg:max-w-xl lg:pr-5 relative z-40 ">
              <LandingPageText />
            </div>
          </div>

          <div className="relative lg:ml-32 lg:block lg:w-1/2 flex-[0.4] mt-20 ">
              <HeroPic />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default LandingPage


