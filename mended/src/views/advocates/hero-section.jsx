import React from "react";
import { Container } from "@/components";
import HeroImage from "../../../public/assets/heroimg2.svg";
import Image from "next/image";
import Warriorsimg from "../../../public/assets/warriors.svg";
const HeroSection = () => {
  return (
    <div className="advocate-bg pb-12 -mt-40 flex items-center">
      <div className="lg:flex md:flex grid mt-20">
        <div className="flex justify-center">
          <h2 className="text-white text-center font-extrabold text-[25px] absolute top-[102px] lg:hidden md:hidden flex">
            Advocates
          </h2>
        </div>
        <div className="lg:w-[55%] lg:order-1 md:order-1 order-2 md:w-[50%] w-full lg:pt-44 md:pt-28  lg:pl-[125px] p-6 lg:text-left md:text-left text-center lg:p-14 ">
          <div className="flex justify-center">
            <Image src={Warriorsimg} width={600} height={1} alt="" />
          </div>
          {/* <h2
          
            className="lg:text-[100px] md:text-[65px] text-[50px]  font-light mt-10 text-white font-driping"
          >
            The 300 Warriors
          </h2> */}
          <h2 className="text-[16px] font-normal  tracking-[0.5px]  text-[#E2E2E2] ">
            The 300 warriors are students that believe in our mission and
            believe we will change the world together. Our warriors will spread
            the word on their campuses, influence change on their campus, fight
            the negative mental health stigma on their campus, and normalize
            mental health on their campus. These warriors check in with board
            members daily and are the spark to our revolution.
          </h2>
        </div>
        <div className="lg:w-[45%] lg:order-2 md:order-2 order-1 md:w-[50%] w-full lg:mt-0 md:mt-0 mt-14 lg:mb-0 md:mb-0 -mb-10 flex justify-center items-center ">
          <Image src={HeroImage} width={1400} height={1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
