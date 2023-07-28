import React from "react";
import Image from "next/image";

const TeamCard = ({ data }) => {
  return (
    <div className="lg:w-[250px] md:w-[250px] w-[220px] h-[160px] rounded-3xl border-[3px] border-[#ffffff4a] bg-[#193535CC] backdrop-blur-md">
      <div className="h-full w-full relative">
        <div className="justify-center flex">
          <Image
            src={data?.img}
            alt="any"
            width={110}
            height={1}
            className="absolute -top-14 rounded-3xl"
          />
        </div>
        <div className="pt-[70px]  text-center">
          <h2 className="text-white lg:text-headingTwo md:text-headingTwo text-[12px] lg:mt-0 md:mt-0 mt-3 uppercase">
            {data.heading}
          </h2>
          <h2 className="text-white opacity-[70%] pt-2 lg:text-[15px] md:text-[15px] text-[11px] tracking-[1.3px]">
            {data.posts}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
