import AnimatedText from "./AnimatedText";
import Image from "next/image";
import Layout from "./Layout";
import React from "react";
import awwa from "/public/images/awwa.png";
import bookGrocer from "/public/images/bookGrocer.png";
import ekoh from "/public/images/ekoh.png";
import holygrail from "/public/images/holygrail.png";
import michu from "/public/images/michu.png";
import pressplay from "/public/images/pressplay.png";

function TrustSection() {
  const TrustImage = ({ style, img, borderColor }) => {
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
        <Image src={img} alt="ekoh-store" className="w-13 h-full" />
      </div>
    );
  };
  return (
    <Layout className="pt-0">
      <div className="flex justify-between border-t-2">
        <div
          style={{
            flex: 0.7,
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
            justifyContent: "center",
          }}
        >
          <h1 className="!text-[23px] !font-bold mb-3">
            I work with over 279+ happy clients all over the world.
          </h1>
          <p>
            I work with over 279+ happy clients all over the world.I work with
            over 279+ happy clients all over the world. I work with over 279+
            happy clients all over the world.I work with over 279+ happy clients
            all over the world.
          </p>
        </div>
        <div
          style={{
            flex: 0.2,
            display: "flex",
            alignContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div className="">
            <TrustImage img={ekoh} />
            <TrustImage img={pressplay} />
          </div>
          <div className="mt-7">
            <TrustImage img={michu} />
            <TrustImage img={awwa} />
          </div>
          <div className="">
            <TrustImage img={bookGrocer} />
            <TrustImage img={holygrail} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TrustSection;
