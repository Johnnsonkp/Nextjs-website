import AnimatedText from "@/components/AnimatedText";
import CozyTees from "../../public/images/projects/cozy-landing.png";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/taskSprinterV3-2.png";
import project2 from "../../public/images/projects/itsAVibe.png";
import project3 from "../../public/images/projects/cityStaysMelb.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light sm:w-[100%] sm:flex-col sm:p-6">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-2xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg sm:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto border border-solid border-dark rounded-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 sm:p-0 sm:w-full">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light sm:w-[100%] ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
          <p className="my-2 font-medium text-dark dark:text-light">
            {summary}
          </p>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};
function projects() {
  return (
    <>
      <Head>
        <title>Chinonso.io | Projects Page</title>
        <meta
          name="Projects"
          content="Some of My Dev projects using HTML, CSS, Javascript, React, Ruby on Rails, Shopify, Wordpress, Nodejs, Typescript and many more"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-x-hidden sm:w-[100vw] sm:px-5 ">
        <Layout className="pt-16 sm:!px-0">
          <AnimatedText
            text="Imagination Trumps knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 sm:gap-0 sm:!grid-cols-none sm:grid-cols-auto sm:!flex-col sm:justify-between">
            <div className="col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
              <FeaturedProject
                title={"Productivity System"}
                img={project1}
                summary={
                  "A complete productivity App created with React on the frontend, nodeJS and express for the server and Notion as the database. Developed to allow you stay organized, efficient, and focused on your daily, weekly and monthly goals."
                }
                link={"https://tasksprinterv3.netlify.app/"}
                github={"https://github.com/Johnnsonkp/TaskSprinterv3"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
              <Project
                title={"City Stays Melbourne "}
                img={project3}
                summary={
                  "A direct booking website for my vacation rental business. Built using wordpress with my own personal customistions. Connected to my PMS, I am able to take bookings directly of which the calendar syncs with my OTA calendar (Airbnb, VRBO) to stop double bookings and other conflicts. "
                }
                link={"https://citystaysmelbourne.com.au/"}
                github={"/"}
                type={"Direct Booking Website"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
              <Project
                title={"CozyTees"}
                img={CozyTees}
                summary={
                  "Cozy tees is a two-sided-marketplace application on rails that facilites the buying and selling of T-shirts and sporting jerseys."
                }
                link={"https://cozy-tees-app.herokuapp.com/"}
                github={"https://github.com/Johnnsonkp/cozy_tees"}
                type={"Two Way Marketplace App"}
              />
            </div>
            <div className="col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
              <FeaturedProject
                title={"Productivity System"}
                img={project2}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"https://cozy-tees-app.herokuapp.com/"}
                github={"https://github.com/Johnnsonkp/cozy_tees"}
                type={"Two Way Marketplace App"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
              <Project
                title={"Productivity System"}
                img={project1}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
              <Project
                title={"Productivity System"}
                img={project1}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
