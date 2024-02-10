import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./icons";
import { useEffect, useState } from "react";

import Link from "next/link";
import Logo from "./Logo";
import LogoDropDown from "./LogoDropDown/LogoDropDown";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ title, href, className }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group border-r-[0.5px] border-l-[0.5px] border-lightGray px-8
      `}
      style={{
        background:
          router.asPath === href
            ? "linear-gradient(360deg, rgba(226, 151, 103, 0.8) -94.82%, rgba(49, 239, 195, 0) 70.64%)"
            : "transparent",
        color: router.asPath === href && "rgba(226, 151, 103, 1)",
      }}
    >
      {title}
      <span
        style={{ backgroundColor: "rgba(226, 151, 103, 1)" }}
        className={`
        h-[6px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-light overflow-hidden`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ title, href, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group border-lightGray px-8 text-light dark:text-dark mt-1
      `}
      style={{
        background:
          router.asPath === href
            ? "linear-gradient(360deg, rgba(226, 151, 103, 0.8) -94.82%, rgba(49, 239, 195, 0) 70.64%)"
            : "transparent",
        color: router.asPath === href && "rgba(226, 151, 103, 1)",
      }}
    >
      {title}
      <span
        style={{ backgroundColor: "rgba(226, 151, 103, 1)" }}
        className={`
        h-[3px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-light overflow-hidden`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBarCustom = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const DayNightSwitch = () => {
    return (
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`ml-3 flex items-center justify-center rounded-full p-1 ${
          mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        {mode === "dark" ? (
          <SunIcon className={"fill-dark"} />
        ) : (
          <MoonIcon className={"fill-dark"} />
        )}
      </button>
    );
  };

  return (
    <header
      className={`w-full px-20 py-2 font-medium flex items-center justify-between dark:text-light mt-0 mb-0 border-b-[1px] border-lightGray overflow-hidden relative sm:!px-5 sm:!py-4 `}
      style={{
        boxSizing: "border-box",
      }}
    >
      <Logo className={"mr-4 py-5 px-3"} />
      {/* <LogoDropDown className={"mr-4 py-5 px-3"} /> */}
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden ml-20">
        <nav className="py-0 mt-0">
          <CustomLink href={"/"} title={"Home"} className={`py-6 px-2`} />
          <CustomLink href={"/about"} title={"About"} className={`py-6 px-5`} />
          <CustomLink
            href={"/projects"}
            title={"Projects"}
            className={"py-6 px-5"}
          />
          <CustomLink
            href={"/articles"}
            title={"Articles"}
            className={"py-6 px-5"}
          />
          {/* <CustomLink href={"/study"} title={"Study"} className={"py-6 px-5"} /> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Johnnsonkp"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full dark:bg-dark"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <DayNightSwitch />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              className={`py-3 px-2`}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              className={`py-3 px-5`}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/projects"}
              title={"Projects"}
              className={"py-3 px-5"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/articles"}
              title={"Articles"}
              className={"py-3 px-5"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/study"}
              title={"Study"}
              className={"py-3 px-5"}
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap ">
            <motion.a
              href="/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Johnnsonkp"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/john-nkpolukwu-521201138/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <DayNightSwitch />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBarCustom;
