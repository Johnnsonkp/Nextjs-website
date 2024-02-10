import Layout from "./Layout";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between sm:!px-3 sm:!text-1xl sm:!py-6 sm:!text-[16px] sm:!font-700 sm:inline-block sm:text-center">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center sm:block sm:!text-center">
          Built with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            target="_blank"
            href="https://github.com/Johnnsonkp/Nextjs-website"
            className="underline underline-offset-2"
          >
            Chinonso.io
          </Link>
        </div>
        <Link
          href="mailto:john.nkp1@gmail.com"
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
