import { CircularText, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from '../icons';
import React, { useState } from 'react'

import AnimatedText from '../AnimatedText';
import Link from "next/link";
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function SideNavSocial() {
  const [expandNav, setExpandNav] = useState(false)
  return (
    <div 
      className={`shadow-xl rounded-xl border border-[#cfd8dc7b] fixed left-[15px] bottom-[40%] flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-8 md:bottom-auto md:absolute sm:!left-9 bg-[#F5F5F5] 
        ${expandNav? 'w-[150px]' : 'w-[55px]'}`
      }
      onMouseEnter={() => setExpandNav(true)}
      onMouseLeave={() => setExpandNav(false)}
    >
      <nav className="flex items-center justify-center flex-wrap w-[100%] p-1">
        <li 
            className={`border border-transparent hover:border-[#cfd8dc7b] flex items-center mx-auto font-medium p-2 rounded-md ${expandNav && 'w-full cursor-pointer' }`}
        >
          <motion.a
            href="https://www.youtube.com/@chinonso_io"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex "
          >
            <YoutubeIcon className={'!w-6'}/>
            <p className={`font-semibold text-sm ml-2 my-[auto] ${expandNav? 'visible' : 'hidden'}`}>YouTube</p>
          </motion.a>
        </li>
        <li 
            className={`border border-transparent hover:border-[#cfd8dc7b] flex items-center mx-auto font-medium p-2 rounded-md ${expandNav && 'w-full cursor-pointer' }`}
        >
            <motion.a
              href="https://www.facebook.com/johnnsonkp"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex"
            >
              <FacebookIcon className={'!w-6'}/>
              <p className={`font-semibold text-sm ml-2 my-[auto] ${expandNav? 'visible' : 'hidden'}`}>Facebook</p>
            </motion.a>
        </li>

        {/* <li 
            className={`border border-transparent hover:border-[#cfd8dc7b] flex items-center mx-auto font-medium p-2 rounded-md ${expandNav && 'w-full cursor-pointer' }`}
        >
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <InstagramIcon />
            </motion.a>
            <p className={`font-semibold text-sm ml-2 ${expandNav? 'visible' : 'hidden'}`}>Instagram</p>
        </li> */}

        <li 
            className={`border border-transparent hover:border-[#cfd8dc7b] flex items-center mx-auto font-medium p-2 rounded-md ${expandNav && 'w-full cursor-pointer' }`}
        >
            <motion.a
              href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex"
            >
              <LinkedInIcon className={'!w-6'}/>
              <p className={`font-semibold text-sm ml-2 my-[auto] ${expandNav? 'visible' : 'hidden'}`}>Linkedin</p>
            </motion.a>
        </li>
        </nav>
    </div>
  )
}

export default SideNavSocial


