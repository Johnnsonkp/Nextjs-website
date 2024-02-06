import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import HireMe from "@/components/HireMe";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import TrustSection from "@/components/TrustSection";
// import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import lightBulb from "../../public/images/svgs/airbnb-icon.svg";
import profilePic from "../../public/images/profile/developer-pic-5.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chinonso.io</title>
        <meta
          name="description"
          content="I am Chinonso John Nkpolukwu, a Full-stack developer, Shopify Developer and Short-term rental Host. Welcome to my portfolio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` text-dark w-full min-h-screen main dark:text-light`}>
        <Layout className="pt-6 mt-10 flex items-center md:!p-12 sm:pt-8 sm:!px-1 lg:mt-0">
          <div className="flex items-center justify-around w-full border border-solid rounded-lg border-transparent">
            <div className="flex items-center justify-around w-full border border-solid rounded-lg border-transparent relative lg:flex-col md:!self-center">
              <div
                className="w-1/2 md:!static md:w-full"
                style={{
                  position: "relative",
                  // left: "-300px",
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
                    alt="Software Developer profile picture"
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
                  className="!text-[68px] !text-right !font-bold xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl sm:!w-full"
                />
                <div className="relative left-[20%] lg:static ">
                  <p className="mt-8 mb-5 text-base font-medium w-[540px] md:w-[100%]">
                    As a dynamic Full-Stack Developer with expertise in React,
                    and Ruby on Rails, including Shopify development I bring a
                    distinctive touch as a Short-Term Rental Host. My approach
                    involves leveraging technology to achieve optimal results.
                  </p>

                  <div className="flex items-center self-end mt-2 lg:text-center  lg:!self-center lg:justify-center">
                    <Link
                      href="/dummy.pdf"
                      target={"_blank"}
                      className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                      download={true}
                    >
                      Resume <LinkArrow className={"w-6 ml-1"} />
                    </Link>
                    <Link
                      href="/dummy.pdf"
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

        {/* <TrustSection /> */}
        <HireMe />
      </main>
    </>
  );
}
