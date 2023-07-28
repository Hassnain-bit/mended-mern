import React from "react";
import HeroSection from "./hero-section";
import TeamSection from "./team-section";
import { JoinBanner } from "@/components";
import AdvocatesSmallImage from "../../../public/assets/advocatedotssmall.svg";
import Image from "next/image";
const main = () => {
  return (
    <div className="relative">
      <Image
        src={AdvocatesSmallImage}
        width={400}
        height={1}
        alt=""
        className="lg:hidden md:hidden flex absolute right-0 top-[10%]"
      />
      <HeroSection />
      <div className="relative">
        <TeamSection />
        <div className="advo-bg pt-64 -mt-10 mb-20">
          <JoinBanner />
        </div>
      </div>
    </div>
  );
};

export default main;
