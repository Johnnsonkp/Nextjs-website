import CtaBtnSecondary from '../button/CtaBtnSecondary'
import CtaButton from '../button/CtaButton'
import React from 'react'
import SatisfiedClientStars from '../Trust/SatisfiedClientStars'
import styles from './heroText.module.css'

function LandingPageText() {
  return (
    <div className=''>
        <SatisfiedClientStars />
        <p className="text-xs font-medium uppercase border border-[#FBEBEB] bg-[#FBEBEB] px-2 py-1 text-[#DA3834] rounded-full inline-block ">
          Chinonso J. Nkpolukwu - (John)
        </p>
        {/* <h2 className={` ${styles.textBold} mb-6 leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug text-[3.325rem]`}> */}
        <h2 className={` ${styles.textBold} mb-6 leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug text-[3.625rem]`}>
            Full-Stack Developer
            <span 
              className={`${styles.textBold} inline-block border-b-8 border-g4 bg-white dark:bg-[#1C1C1C] pr-4 font-medium text-g4 animate__animated animate__flash`}
            >
              Shopify Expert
            </span>
        </h2>
        {/* <p className={`${styles.heroTextBold} font-light text-base text-gray-700 dark:text-[#f4f4f4] max-w-[39.25rem] text-[1.125rem] mt-[1.875rem] mb-[1.775rem] leading-[150%] w-[80%]`}> */}
        <p className={`${styles.heroTextBold} font-normal text-base text-gray-700 dark:text-[#f4f4f4] max-w-[39.25rem] text-[1.15rem] mt-[1.575rem] mb-[1.575rem] leading-[150%] w-[90%]`}>
          A dynamic Melbourne based Frontend Developer well versed in React, Ruby on Rails and Shopify Web Development. My approach involves leveraging technology into achieving the best results.
        </p>

        <div className="mt-8 w-[60%] flex flex-row items-center justify-between md:flex-row align-middle">
          <CtaButton src={"mailto:john.nkp1@gmail.com"} title={'Get in touch'}/>
          <CtaBtnSecondary src={'/software-dev-portfolio-2024-2.pdf'} title={'Learn more'}/>
        </div>
    </div>
  )
}

export default LandingPageText

