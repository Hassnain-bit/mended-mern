import React from "react";
import { Container } from "@/components";
import MendedTeamSection from "./mended-team-section";
import { JoinBanner } from "@/components";
import AdvisorSection from "./advisor-section";
import Img from "../../../public/assets/dotsimg.png";
import Img2 from "../../../public/assets/teampngs2.png";
import Img3 from "../../../public/assets/dotsimg.png";
import Image from "next/image";
const main = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={Img}
          width={130}
          height={1}
          alt=""
          className="absolute left-0 -top-24 lg:flex md:flex hidden"
        />
        <Container>
          <div className="flex justify-center">
            <h2 className="text-white text-center font-extrabold text-[25px] absolute -top-7 lg:hidden md:hidden flex">
              Mended Team
            </h2>
          </div>
          <h2 className="text-white text-center lg:text-[20px] md:text-[20px] text-[16px] font-extralight pt-10 lg:px-56">
            A team connected by the passion of mental health and strengthened by
            the desire to change the world
          </h2>
        </Container>
      </div>

      <MendedTeamSection />
      <div className="relative">
        <Image
          src={Img2}
          width={320}
          height={1000}
          alt=""
          className="absolute right-0 lg:-bottom-16 bottom-0"
        />
        <Image
          src={Img3}
          width={150}
          height={1000}
          alt=""
          className="absolute left-0 bottom-0 lg:flex md:flex hidden"
        />
        <AdvisorSection />
        <div className="mt-40 mb-20">
          <JoinBanner />
        </div>
      </div>
    </div>
  );
};

export default main;
