import { FeaturedProject, Project } from "./projects";
import React, { useState } from "react";

import AnimatedText from "@/components/AnimatedText";
import CustomTab from "@/components/tabs";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import ekohAgency from "../../public/AgencyProjects/ekoh-agency.png";
import theBookGrocer from "../../public/AgencyProjects/theBookGrocer-agency.png";

function agencyWork() {
  return (
    <>
      <Head>
        <title>Chinonso.io | Agency Projects</title>
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

          <div className="text-center m-auto">
            <CustomTab />
          </div>

          <div className="grid grid-cols-12 gap-24 gap-y-32 sm:gap-0 sm:!grid-cols-none sm:grid-cols-auto sm:!flex-col sm:justify-between">
            <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
              <Project
                title={"Ekoh-store"}
                img={ekohAgency}
                summary={
                  "A direct booking website for my vacation rental business. Built using wordpress with my own personal customistions. Connected to my PMS, I am able to take bookings directly of which the calendar syncs with my OTA calendar (Airbnb, VRBO) to stop double bookings and other conflicts. "
                }
                link={"https://ekoh-store.com/"}
                github={"/"}
                type={"Shopify"}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 sm:w-[100%] sm:my-10 sm:mx-auto">
              <Project
                title={"The Book Grocer"}
                img={theBookGrocer}
                summary={
                  "Cozy tees is a two-sided-marketplace application on rails that facilites the buying and selling of T-shirts and sporting jerseys."
                }
                link={"https://bookgrocer.com/"}
                github={"/"}
                type={"Shopify"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default agencyWork;
