import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import HireMe from "@/components/HireMe";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
// import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import lightBulb from "../../public/images/svgs/airbnb-icon.svg";
import profilePic from "../../public/images/profile/developer-pic-5.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chinonso.io | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-stack developer portfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex items-center text-dark w-full min-h-screen main`}>
        <Layout className="pt-0">
          <div className="flex items-center justify-around w-full">
            <div className="w-1/2">
              <Link href="/about">
                <Image
                  style={{
                    width: "480px",
                    height: "550px",
                    width: "430px",
                    height: "500px",
                    objectFit: "cover",
                    border: "2px solid rgba(238, 209, 136, 0.3)",
                    borderRadius: "30px",
                    backgroundColor: "#eed188",
                    backgroundColor: "rgba(238, 209, 136, 0.4)",
                    backgroundColor: "rgba(226, 151, 103, 0.7)",
                    boxShadow: "2px 2px 2px #333",
                    boxShadow: "8px 8px 0 0 #333",
                  }}
                  src={profilePic}
                  alt="Software Developer profile picture"
                  className={`w-full h-auto ${styles.profilePic}`}
                />
              </Link>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              {/* <h1>Turning Vision Into Reality With Code And Design.</h1> */}
              <AnimatedText
                text="Full-Stack Developer & Short-Term Rental Host."
                // text="Vacational Rental, Software Engineer Specialist."
                className="!text-5xl !text-left !font-bold"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium captilize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <Link
          className={`absolute right-12 bottom-8 inline-block w-24 airbnb-logo ${styles.airbnbLogo}`}
          href="https://www.airbnb.com.au/users/show/447493012"
          target="_blank"
          // style={styles.airbnbLogo}
        >
          {/* <div className="absolute right-12 bottom-8 inline-block w-24"> */}
          {/* https://www.airbnb.com.au/users/show/447493012 */}
          <Image
            src={lightBulb}
            alt="Airbnb-profile"
            className="w-full h-auto airbnb-logo"
          />
        </Link>
      </main>
    </>
  );
}
