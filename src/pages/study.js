import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import React from "react";

function study() {
  return (
    <>
      <Head>
        <title>Chinonso.io | Study Page</title>
        <meta name="description" content="Study"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Here's To Continuous Learning" />
        </Layout>
      </main>
    </>
  );
}

export default study;
