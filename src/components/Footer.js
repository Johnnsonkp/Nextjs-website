import Layout from "./Layout";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between sm:!px-3 sm:!text-1xl sm:!py-6 sm:!text-[14px] sm:!font-500">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Built with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link href="/" className="underline underline-offset-2">
            Chinonso.io
          </Link>
        </div>
        <Link
          href="/"
          target={"_blank"}
          className="underline underline-offset-2 sm:hidden"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
