import React from "react";
import { Container, TeamMultiCard } from "@/components";
import Image from "next/image";
import Img from "../../../public/assets/teampngs.png";
import Img2 from "../../../public/assets/teampngs2.png";
import Img3 from "../../../public/assets/dotsimg.png";
import Img4 from "../../../public/assets/advocatesmall2.svg";

import { ADVOCAATE_TEAM } from "../../constants/data";
const TeamSection = () => {
  return (
    <div className="relative">
      <Image
        src={Img}
        width={300}
        height={1000}
        alt=""
        className="absolute left-0 lg:top-10 md:top-10 -top-28"
      />
      <Image
        src={Img2}
        width={300}
        height={1000}
        alt=""
        className="absolute lg:flex md:flex hidden right-0 lg:-bottom-[560px] md:-bottom-[560px] -bottom-56"
      />
      <Image
        src={Img4}
        width={90}
        height={1}
        alt=""
        className="lg:hidden md:hidden flex right-0 -bottom-[325px] absolute"
      />
      <Image
        src={Img3}
        width={140}
        height={1000}
        alt=""
        className="absolute left-0 bottom-0"
      />
      {/* <Container> */}
      <div className="grid lg:grid-cols-3 grid-cols-2 justify-center lg:gap-4 md:gap-4 lg:px-32">
        {ADVOCAATE_TEAM?.map((item) => (
          <div className="mt-20 flex lg:justify-center md:justify-center justify-center ">
            <TeamMultiCard data={item} isAuto />
          </div>
        ))}
      </div>
      {/* </Container>s */}
    </div>
  );
};

export default TeamSection;
