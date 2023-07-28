import React from "react";
import Image from "next/image";
const InfoSection = ({ order1, order2, heading, subHeading, color, img }) => {
  return (
    <div className="lg:flex md:flex justify-between w-full lg:mt-36 md:mt-36 mt-16">
      <div
        style={{
          order: order1,
        }}
        className="lg:w-[45%] md:w-[50%] w-full flex lg:justify-end md:justify-end justify-center lg:pr-24 md:pr-24 pr-10"
      >
        <Image src={img} width={140} height={1} alt="" />
      </div>
      <div
        style={{
          order: order2,
          color: color,
        }}
        className="lg:w-[55%] lg:text-left md:text-left text-center  md:w-[50%] w-full"
      >
        <h2 className="lg:text-[32px] md:text-[32px] text-[25px] font-bold leading-10 ">
          {heading}
        </h2>

        <h2 className="text-[17px] font-normal   text-[#FFFFFFCC] ">
          {subHeading}
        </h2>
      </div>
    </div>
  );
};

export default InfoSection;
