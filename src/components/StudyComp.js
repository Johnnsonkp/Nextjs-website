import { motion, useScroll } from "framer-motion";

import AnimatedText from "./AnimatedText";
import Lilcon from "./Lilcon";
import React from "react";
import { useRef } from "react";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-light text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

function StudyComp() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-24">
      {/* <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2> */}
      {/* <AnimatedText text="Here's To Continuous Learning" /> */}

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between m1-4">
          <Details
            type="System design"
            time="2020-2022"
            place={"Coder Academy"}
            info="Relevant course included Computer Science, Data and Algorithim, Computer Systems"
          />
          <Details
            type="Client-side storage"
            time="2010-2012"
            place={"Allsaints Catholic Senior College"}
            info="Relevant course included Computer Science, Data and Algorithim, Computer Systems"
          />
        </ul>
      </div>
    </div>
  );
}

export default StudyComp;
