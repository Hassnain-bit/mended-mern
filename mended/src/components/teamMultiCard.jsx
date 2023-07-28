import React from "react";
import Img1 from "../../public/assets/team8.svg";
import Img2 from "../../public/assets/team9.svg";
import Image from "next/image";
const TeamMultiCard = ({ isAuto, data }) => {
  return (
    <div
      className={
        isAuto
          ? "w-[320px] lg:h-[140px] md:h-[140px] h-[110px] rounded-3xl border-[2px] border-[#ffffff4a] bg-[#193535ac] backdrop-blur-sm transform-card"
          : "lg:w-[550px] md:w-[550px] w-full px-10  h-[160px] rounded-3xl border-[2px] border-[#ffffff4a] bg-[#011f1983] backdrop-blur-md"
      }
    >
      <div className="h-full w-full flex relative">
        <div className="flex w-[50%] justify-center">
          <Image
            src={data.img}
            alt="any"
            width={100}
            height={1}
            className={
              isAuto
                ? "absolute lg:left-4 md:left-4 left-0 -top-14 transform-img rounded-3xl"
                : "absolute lg:left-20 md:left-20 left-0 -top-14 rounded-3xl"
            }
          />
          <h2
            className={
              isAuto
                ? "text-white lg:pt-16 md:pt-16 pt-14 lg:text-[12px] md:text-[12px] text-[8px] text-center uppercase"
                : "text-white pt-16 lg:text-[18px] md:text-[18px] text-[14px] uppercase"
            }
          >
            {data.name1}
          </h2>
        </div>
        <div className="flex w-[50%] justify-center">
          <Image
            src={data.img2}
            alt="any"
            width={100}
            height={1}
            className={
              isAuto
                ? "absolute lg:right-4 md:right-4 right-0 -top-14 transform-img rounded-3xl"
                : "absolute lg:right-20 md:right-20 right-0  -top-14 rounded-3xl"
            }
          />
          <h2
            className={
              isAuto
                ? "text-white lg:pt-16 md:pt-16 pt-14 pl-4 lg:text-[12px] md:text-[12px] text-[8px] text-center uppercase"
                : "text-white pt-16 lg:text-[18px] md:text-[18px] text-[14px] uppercase"
            }
          >
            {data.name2}
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <h2
          className={
            isAuto
              ? "text-[#8CDBDA] text-center opacity-[70%] absolute bottom-3 pt-4 lg:text-[19px] md:text-[19px] text-[13px] tracking-[1.3px] font-bold"
              : "text-white text-center opacity-[70%] absolute bottom-8 pt-2 text-[15px] tracking-[1.3px]"
          }
        >
          {data.name3}
        </h2>
      </div>
    </div>
  );
};

export default TeamMultiCard;
