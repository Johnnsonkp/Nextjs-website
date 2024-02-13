import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import HireMe from "@/components/HireMe";
import Image from "next/image";
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
          Chinonso.io - React, Ruby on Rails and Shopify Software Developer
        </title>
        <meta
          name="description"
          content="I am Chinonso John Nkpolukwu, a Full-stack developer, Shopify Developer and Short-term rental Host. Welcome to my portfolio website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` text-dark w-full min-h-screen main dark:text-light`}>
        <Layout className="pt-6 mt-10 flex items-center md:p-6 sm:!pt-10 sm:!px-5 lg:mt-0 sm:!m-0 sm:!pb-0">
          <div className="flex items-center justify-around w-full border border-solid rounded-lg border-transparent">
            <div className="flex items-center justify-around w-full border border-solid rounded-lg border-transparent relative lg:flex-col md:!self-center">
              <div
                className="w-1/2 md:!static md:w-full"
                style={{
                  position: "relative",
                  right: "30%",
                }}
              >
                <Link href="/about" style={{ cursor: "pointer" }}>
                  <Image
                    priority
                    sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
                    style={{
                      width: "450px",
                      height: "500px",
                      width: "90%",
                      // width: "80%",
                      objectFit: "cover",
                      border: "2px solid rgba(238, 209, 136, 0.3)",
                      borderRadius: "30px",
                      backgroundColor: "rgba(226, 151, 103, 0.7)",
                      boxShadow: "8px 8px 0 0 #333",
                      cursor: "pointer",
                    }}
                    src={profilePic}
                    alt="Professional Image for Developer Bio"
                    className={`w-full h-auto ${styles.profilePic} lg:hidden md:!inline-block md:!h-[400px] md:!w-full md:mb-8`}
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center self-center absolute right-[0px] w-[80vw] border-r-2 lg:w-full lg:static lg:text-center md:border-hidden sm:border-hidden sm:!w-full">
                <AnimatedText
                  textArr={[
                    "Full-Stack Developer",
                    "Shopify Developer",
                    "Vacation Rental Host",
                  ]}
                  className="!text-[68px] !text-right !font-bold xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!w-full "
                />
                <div className="relative left-[20%] lg:static ">
                  <p className="mt-8 mb-5 text-base font-medium w-[540px] md:w-[100%]">
                    As a dynamic Full-Stack Developer with expertise in{" "}
                    <Link href="https://react.dev/" target={"_blank"}>
                      React,
                    </Link>{" "}
                    <Link href="https://rubyonrails.org/" target={"_blank"}>
                      {" "}
                      Ruby on Rails
                    </Link>{" "}
                    and{" "}
                    <Link href="https://shopify.dev/" target={"_blank"}>
                      Shopify
                    </Link>{" "}
                    Web Development. I bring a distinctive touch as a{" "}
                    <Link
                      href="https://www.airbnb.com.au/users/show/447493012"
                      target={"_blank"}
                    >
                      Short-Term Rental Host
                    </Link>
                    . My approach involves leveraging technology into achieving
                    the best results.
                  </p>

                  <div className="flex items-center self-end mt-2 lg:text-center  lg:!self-center lg:justify-center">
                    <Link
                      href="/software-dev-portfolio-2024-2.pdf"
                      target={"_blank"}
                      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                      download={true}
                    >
                      Resume <LinkArrow className={"w-6 ml-1"} />
                    </Link>
                    <Link
                      href="mailto:john.nkp1@gmail.com"
                      target={"_blank"}
                      className="ml-4 text-lg font-medium captilize text-dark underline dark:text-light"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>

        <TrustSection />
        <HireMe />
      </main>
    </>
  );
}
