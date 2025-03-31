import React, {useEffect, useState} from 'react'

import Image from 'next/image'
import figmaIcon from '../../../public/images/figma-icon.svg'
import { motion } from "framer-motion";
import profilePhoto from '../../../public/images/profile/developer-pic-5.png'
import reactLogo from '../../../public/images/react-2.svg'
import shopifyImg from '../../../public/images/shopify-img.svg'
import smallProfilePic from "../../../public/images/profile/developer-pic-8.png";
import styles from './hero.module.css'
import woocommerce from '../../../public/images/woocommerce-1.svg'

const Skill = ({ name, x, y, imgSrc }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold text-light shadow-dark cursor-pointer absolute dark:bg-circularLight dark:text-dark w-[100%] border px-3 py-3 bg-[#F5F5F5]"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <Image 
        src={imgSrc} 
        className={`${styles.rotationIcons} w-[45px] max-w-[45px] max-h-[40px]`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" 
      />
      {!imgSrc && name}
    </motion.div>
  );
};

function HeroPic() {
  const [width, setWidth] = useState();

  useEffect(() => {
    if (window && window.innerWidth < 700) {
      setWidth(window.innerWidth);
      console.log("width", width);
    }
  }, []);

    const RotatingCircleBG = () => {
      return <div 
      className={`z-0 w-[550px] h-[35vw] top-[-80px] absolute flex items-center justify-center rounded-full bg-circularLighter dark:text-light dark:bg-circularDark sm:!h-[80vh] sm:mt-10 sm:w-[105%]`}
    >
      <motion.div
          className={`${styles.rotateAnimation} flex items-center justify-center rounded-full font-semibold bg-transparent text-light p-8 shadow-dark cursor-pointer dark:bg-circularLight dark:text-dark `}
          whileHover={{ scale: 1.05 }}
      >
        <Skill
          imgSrc={woocommerce}
          className={`dark:bg-circularLight dark:text-dark`}
          name="woocommerce"
          x={`${width < 700 ? "-28vh" : "-12vw"}`}
          y={`${width < 700 ? "5vh" : "8vw"}`}
        />
        <Skill
          imgSrc={reactLogo}
          name="react"
          x={`${width < 700 ? "-14vh" : "-6vw"}`}
          y={`${width < 700 ? "-10vh" : "-13vw"}`}
        />
        <Skill
          imgSrc={shopifyImg}
          name="Javascript"
          x={`${width < 700 ? "20vh" : "10vw"}`}
          y={`${width < 700 ? "16vh" : "10vw"}`}
        />
        <Skill
          imgSrc={figmaIcon}
          name="Figma"
          x={`${width < 700 ? "20vh" : "14vw"}`}
          y={`${width < 700 ? "16vh" : "-5vw"}`}
        />

      </motion.div>
      
    </div>
    }

    const DisplayPicsCollarge = () => {
      return (
        <div 
          className={`z-10 relative mx-auto w-fit rounded-[6rem] rounded-br-none rounded-tl-none border-4 border-[#EBF0F5]-500 `}
          // className={`z-10 relative mx-auto w-fit  `}
        >
          <div 
            className='border-4 border-[#E9E9E9]-500 rounded-[6rem] 
            overflow-hidden absolute bottom-[-2%] left-[-18%] bg-[#E9E9E9]'
          >
          {/* <div 
            className='border-4 border-[#E9E9E9]-500 rounded-[6rem] 
             absolute bottom-[-2%] left-[-18%] bg-[#E9E9E9]'
          > */}
              <Image 
                src={smallProfilePic}
                alt="profile pic"
                className='w-[160px] h-[160px] p-0 object-fit'
              />
          </div>
          <Image 
            priority 
            alt="profile pic"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" 
            className='w-[400px] h-[400px] object-cover ' 
            src={profilePhoto} 
          />
        </div>
      )}
  
  return (
    <div>
      {/* <RotatingCircleBG /> */}
      <DisplayPicsCollarge />
    </div>
  )
}

export default HeroPic