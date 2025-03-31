import Link from 'next/link'
import { LinkArrow } from '../icons'
import React from 'react'
import styles from './ctaButton.module.css'

function CtaBtnSecondary({src, title}) {
  return (
    <Link
        href={src}
        target={"_blank"}
        // className="flex items-center bg-[transparent] rounded-[22.5rem] px-[1.1875rem] py-[0.9rem] text-dark text-lg font-semibold hover:bg-dark hover:text-light border border-solid border-dark hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        className={styles.secondaryButton}
        download={true}
    >
        {title} 
    </Link>
  )
}

export default CtaBtnSecondary