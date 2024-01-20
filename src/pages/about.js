import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Skills } from "@/components/Skills";
import profilePic from "../../public/images/profile/developer-pic-8.png";

const StillCarousel = () => {
  return (
    <div className="flex w-full flex-row items-center mt-10 justify-between">
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-5 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={profilePic}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 border-solid border-dark bg-dark"
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-5 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem" />
        <Image
          src={profilePic}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 border-solid border-dark bg-dark"
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-5 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={profilePic}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 border-solid border-dark bg-dark"
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-5 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={profilePic}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 border-solid border-dark bg-dark"
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-5 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={profilePic}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 border-solid border-dark bg-dark"
        />
      </div>
      <div className="col-span-3 relative h-max rounded-2xl border border-solid border-dark bg-light p-5 m-3">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] " />
        <Image
          src={profilePic}
          alt="Chinonso"
          className="w-full h-600 rounded-2xl border-2 border-solid border-dark bg-dark"
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
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Purposefully Driven!" className="mb-16" />
          <div className="grid w-full grid-cols-8 grid-rows-1 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark " />
              <Image
                src={profilePic}
                alt="Chinonso"
                className="w-full h-600 rounded-2xl border-2 border-solid border-dark bg-dark"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-meduim capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-meduim capitalize text-dark/75">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
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