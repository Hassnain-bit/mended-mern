import React from "react";
import { TeamCard } from "@/components";
import { TEAM_ARR2, TEAM_ARR3 } from "@/constants/data";
import DripImg from "../../../public/assets/bannerdrip.png";
import LightImg from "../../../public/assets/lightimg.png";
import Image from "next/image";
const advisorSection = () => {
  return (
    <div className="lg:px-24 px-10 relative">
      <Image
        src={DripImg}
        width={80}
        height={1}
        alt=""
        className="absolute right-0 top-28"
      />
      <Image
        src={LightImg}
        width={500}
        height={1}
        alt=""
        className="absolute left-0 top-28"
      />
      <h2 className="text-center text-white lg:text-[42px] md:text-[42px] text-[25px] font-extrabold">
        Our Advisors
      </h2>
      <div className="flex justify-center lg:mt-14 md:lg:mt-14 mt-4">
        <div className="text-bg h-[100px] w-[480px] flex items-center justify-center">
          <h2 className="text-center text-[#FCCD24] lg:text-[24px] md:text-[24px] text-[19px]  lg:font-bold md:font-bold font-normal">
            Youth Advisory Board
          </h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  justify-center gap-6 ">
        {TEAM_ARR2.map((team) => (
          <div className="lg:mt-14 md:mt-14  mt-20 flex justify-center">
            <TeamCard data={team} />
          </div>
        ))}
      </div>
      <div className="flex justify-center lg:mt-28 md:mt-28 mt-20">
        <div className="text-bg h-[100px] w-[480px] flex items-center justify-center">
          <h2 className="text-center text-[#FCCD24] lg:text-[24px] md:text-[24px] text-[19px]  lg:font-bold md:font-bold font-normal">
            Advisory Board
          </h2>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  justify-center gap-6 ">
        {TEAM_ARR3.map((team) => (
          <div className="lg:mt-14 md:mt-14  mt-20 flex justify-center">
            <TeamCard data={team} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default advisorSection;
