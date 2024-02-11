import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { Skills } from "@/components/Skills";
import about1 from "/public/images/profile/about-me-1.jpeg";
import about2 from "/public/images/profile/about-me-2.jpeg";
import about3 from "/public/images/profile/about-me-3.jpeg";
import about4 from "/public/images/profile/about-me-4.jpeg";
import about6 from "/public/images/profile/about-me-6.jpeg";
import profilePic from "../../public/images/profile/developer-pic-8.png";

const StillCarousel = () => {
  return (
    <div className="flex w-full flex-row items-center mt-2 justify-between sm:!hidden">
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-2 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={about1}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2"
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-1 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem" />
        <Image
          src={about2}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2"
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-1 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={about3}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 "
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-1 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={about4}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 "
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-1 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={about6}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 "
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-1 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={profilePic}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 bg-dark"
        />
      </div>
    </div>
  );
};

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]),
    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(8) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);

  return <span ref={ref}></span>;
};

function about() {
  return (
    <>
      <Head>
        <title>Chinonso.io | About Page</title>
        <meta name="description" content="About me"></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light sm:overflow-hidden">
        <Layout className="pt-16 sm:!p-5">
          <AnimatedText text="Purposefully Driven!" className="mb-16" />
          <div className="grid w-full grid-cols-8 grid-rows-1 gap-16 sm:flex-col sm:grid-cols-2">
            <div className="col-span-3 flex flex-col items-start justify-start sm:!order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I'm{" "}
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"
                >
                  Chinonso John Nkpolukwu{" "}
                </Link>
                (or John for short). I'm a Melbourne based{" "}
                <Link
                  target="_blank"
                  href="https://business.linkedin.com/talent-solutions/resources/how-to-hire-guides/software-developer/job-description"
                >
                  Software Developer,{" "}
                </Link>
                passionate about using code to create user-friendly front-end
                designs for complex problems.
              </p>
              <p className="font-medium my-4">
                Since 2020, after printing my first "hello world", I've immersed
                myself in the software development space. Transitioning from the
                Digital Marketing agency world using tools like HTML, CSS,
                Javascript, Wordpress, Shopify, Adobe, Figma to the more
                technical frontend development with tech stacks like React,
                Typescript, Ruby on Rails, etc. The tools may have changed but
                the goal has always remained the same.{" "}
                <Link
                  target="_blank"
                  href="https://www.workshopper.com/post/what-is-ux-and-why-is-it-important#:~:text=UX%20Design%20in%20turn%2C%20is,%2C%20efficient%2C%20and%20relevant%20experience."
                  className="italic border-b-2 border-orange-400"
                >
                  Solving problems and creating intuitive, enjoyable experiences
                  for users.
                </Link>
              </p>
              <p className="font-medium">
                When I'm not immersed in web dev world, you'll find me playing
                soccer, exploring Melbourne day/nightlife, oh and running my
                small Vacation Rental business{" "}
                <Link
                  target="_blank"
                  href="https://citystaysmelbourne.com.au"
                  className="italic border-b-2 border-orange-400"
                >
                  CityStays Melbourne
                </Link>
                .
              </p>
            </div>

            <div className="col-span-3 h-80 relative rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light sm:!order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <div className="w-full h-[280px] overflow-hidden">
                <Image
                  src={profilePic}
                  alt="Chinonso"
                  className="w-full h-30 rounded-2xl border-2 border-solid border-dark  bg-[#202020]"
                  priority
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between sm:flex-row sm:!order-3 sm:text-center sm:!m-auto sm:items-center ">
              <div className="flex flex-col items-end justify-center sm:!items-center sm:!px-2">
                <span className="inline-block text-7xl font-bold sm:text-5xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-meduim capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center sm:!items-center sm:!px-2">
                <span className="inline-block text-7xl font-bold sm:text-5xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-meduim capitalize text-dark/75">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center sm:!items-center sm:!px-2">
                <span className="inline-block text-7xl font-bold sm:text-5xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-meduim capitalize text-dark/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <hr className="mt-8" />
          <StillCarousel />
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;
