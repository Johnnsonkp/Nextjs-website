import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import TopNavInfiniteScroll from "@/components/TopNavInfiniteScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  // variable: "font-family: 'Montserrat'",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >
        <TopNavInfiniteScroll />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
