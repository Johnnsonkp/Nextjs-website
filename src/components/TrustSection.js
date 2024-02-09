import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Layout from "./Layout";
import React from "react";
import awwa from "/public/images/awwa.png";
import ekoh from "/public/images/ekoh.png";
import holygrail from "/public/images/holygrail.png";
import michu from "/public/images/michu.png";
import pressplay from "/public/images/pressplay.png";
import theBookGrocer from "/public/images/bookGrocer.png";

function TrustSection() {
  const TrustImage = ({ style, img, borderColor, alt }) => {
    return (
      <div
        className="bg-black w-4 h-5 rounded-md"
        style={{
          border: `3px solid ${borderColor ? borderColor : "green"}`,
          width: "150px",
          height: "80px",
          margin: "20px",
          boxShadow: "rgba(100, 100, 100, 0.3) 0px 0px 5px 3px",
          style,
        }}
      >
        <Image src={img} alt={alt} className="w-13 h-full" />
      </div>
    );
  };
  return (
    <Layout className="pt-0 sm:!px-5 ">
      <div className="flex justify-between border-t-2 sm:inline-block sm:!pt-10">
        <div
          style={{
            flex: 0.7,
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            justifyContent: "center",
          }}
        >
          <h1 className="!text-[23px] !font-bold mb-3 sm:!text-[1.5rem]">
            I've collaborated with 30+ satisfied professional clients across
            various brands.
          </h1>
          <p>
            Having had the privilege of collaborating with various clients
            across multiple industries, this experience has enriched my skill
            set, making me adept in various technologies.
          </p>
        </div>
        <div
          className="sm:!inline-flex flex-wrap sm:!mt-8"
          style={{
            flex: 0.2,
            display: "flex",
            alignContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div className="">
            <TrustImage img={ekoh} alt="Ekoh-store" />
            <TrustImage img={pressplay} alt="Pressplay" />
          </div>
          <div className="mt-7 ">
            <TrustImage img={michu} alt="Michu" />
            <TrustImage img={awwa} alt="AWWA" />
          </div>
          <div className="">
            <TrustImage img={theBookGrocer} alt="The Book Grocer" />
            <TrustImage img={holygrail} alt="Holy Grail" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TrustSection;
