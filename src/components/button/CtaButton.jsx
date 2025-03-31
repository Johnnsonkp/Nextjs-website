import Link from 'next/link'
import React from 'react'
import styles from './ctaButton.module.css'

function CtaButton({src, title}) {
  return (
    <Link 
        href={src} 
        // className=" mr-3 inline-flex w-full flex-[0.5] items-center justify-center bg-[#dc423d] text-white shadow-md  hover:bg-[rgb(220,66,61,0.9)]  focus:outline-none md:mr-4 md:mb-0 md:w-auto leading-inherit cursor-pointer border-solid border-[0.0625rem] rounded-[22.5rem] px-[1rem] py-[0.9rem] no-underline text-center tracking-[0.0625rem] uppercase font-semibold transition-all duration-100 ease-in"
        className={styles.button}
    >
        {title}
    </Link>
  )
}

export default CtaButton