import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Logo() {
  return (
    <div className="flex items-center justify-center ">
      <MotionLink
        href="/"
        className="w-12 h-12 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light mr-2"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        CN
      </MotionLink>
      <h1
        className="sm:hidden"
        style={{ fontWeight: "bold", fontSize: "20px" }}
      >
        <Link href="/">Chinonso.io</Link>
      </h1>
    </div>
  );
}

export default Logo;
