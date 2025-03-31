import React, { useState } from "react";

import AgencyProjects from "@/components/projects/AgencyProjects";
import AnimatedText from "@/components/AnimatedText";
import CozyTees from "../../public/images/projects/cozy-landing.png";
import CustomTab from "@/components/tabs";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import PersonalProjects from "@/components/projects/PersonalProjects";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/taskSprinterV3-2.png";
import project2 from "../../public/images/projects/itsAVibe.png";
import project3 from "../../public/images/projects/cityStaysMelb.png";

const FramerImage = motion(Image);

export const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}) => {
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

export const Project = ({ title, type, img, link, github, summary }) => {
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
function Projects() {
  const [selectedTab, setSelectedTab] = useState("/projects");
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
            text="Projects"
            className="mb-16"
          />

          <div className="text-center m-auto flex justify-center">
            <CustomTab setSelectedTab={setSelectedTab} />
          </div>

          {selectedTab === "/projects" && <PersonalProjects />}
          {selectedTab === "/agency" && <AgencyProjects />}
        </Layout>
      </main>
    </>
  );
}

export default Projects;
