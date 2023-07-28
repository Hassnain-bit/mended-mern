import React from "react";
import HeroSection from "./hero-section";
import WhatsMenderSection from "./whats-mender-section";
import SignupSection from "./signup-section";
import FeaturesSection from "./features-section";
import Image from "next/image";
import GlowImage from "../../../public/assets/becomemendorglow.png";
const main = () => {
  return (
    <div>
      <HeroSection />
      <WhatsMenderSection />
      <div className="signupbg flex justify-center pt-14 lg:h-[400px] md:h-[40px] h-[650px] mt-6 w-full lg:px-24  mb-40">
        <SignupSection />
      </div>
      <div className=" h-auto py-20 relative">
        <Image
          src={GlowImage}
          width={440}
          height={1}
          alt=""
          className="absolute left-0 -bottom-56"
        />
        <FeaturesSection />
      </div>
    </div>
  );
};

export default main;
