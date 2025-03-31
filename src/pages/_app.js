import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import NavBar1 from "@/components/navAgency/NavBar1";
import NavBarCustom from "@/components/NavBarCustom";
import TopNavInfiniteScroll from "@/components/TopNavInfiniteScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <TopNavInfiniteScroll />
        {/* <NavBar /> */}
        {/* <NavBarCustom /> */}
        <NavBar1 />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
