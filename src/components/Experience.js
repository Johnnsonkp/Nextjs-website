import { motion, useScroll } from "framer-motion";

import Lilcon from "./Lilcon";
import React from "react";
import { useRef } from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between sm:items-start"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="mt-3 font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center sm:text-6xl xs:text-5xl">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative sm:w-[100%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between m1-4">
          <Details
            position="Founder / Vacation Rental Host"
            company="City Stays Melbourne"
            companyLink={"https://citystaysmelbourne.com.au/"}
            time="2022-present"
            address="220 Spencer Street, Melbourne, vic, 3000"
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <Details
            position="Front-End Developer"
            company="Myer"
            companyLink={"https://www.myer.com.au/"}
            time="2022-2022"
            address="Richmond, Melbourne, Vic, 3121"
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />

          <Details
            position="Front-End Developer"
            company="Megaphone"
            companyLink={"https://megaphone.com.au/"}
            time="2021-2022"
            address="33-41 Balmain Street Cremorne VIC 3121"
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />

          <Details
            position="Technical Support & Data Entry"
            company="My Emergency Dr"
            companyLink={"https://www.myemergencydr.com/"}
            time="2020-2021"
            address="10 Bond Street, Sydney, NSW, 2000"
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
}
