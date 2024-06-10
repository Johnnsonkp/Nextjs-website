import AnimatedText from "@/components/AnimatedText";
import DefaultLanding from "@/components/landingPage/DefaultLanding";
import Head from "next/head";
import HireMe from "@/components/HireMe";
import Image from "next/image";
import LandingPage from "@/components/landingPage/LandingPage";
import Layout from "@/components/Layout";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import TrustSection from "@/components/TrustSection";
import profilePic from "../../public/images/profile/developer-pic-5.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Chinonso.io | React, Ruby on Rails and Shopify Developer
        </title>
        <meta
          name="description"
          content="I am Chinonso John Nkpolukwu, a Full-stack developer, Shopify Developer and Short-term rental Host. Welcome to my portfolio website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` text-dark w-full min-h-screen main dark:text-light`}>
        <LandingPage />
        {/* <DefaultLanding /> */}
        {/* <TrustSection /> */}
        <HireMe />
      </main>
    </>
  );
}
