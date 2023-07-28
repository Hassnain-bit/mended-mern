import React from "react";
import { Container } from "@/components";
import Image from "next/image";
import Img from "../../../public/assets/becomeimg.png";
import Neon from "../../../public/assets/neonline.svg";
import Neon2 from "../../../public/assets/neonline3.svg";
const HeroSection = () => {
  return (
    <div className="relative">
      <Image
        src={Neon}
        width={70}
        height={1}
        alt=""
        className="absolute left-0 -top-40 lg:flex md:flex hidden"
      />
      <Image
        src={Neon2}
        width={40}
        height={1}
        alt=""
        className="absolute left-0 -top-32 lf:hidden md:hidden flex"
      />
      <Container>
        <div className="lg:flex  md:flex justify-between ">
          <div className="lg:w-[50%] md:w-[50%] w-full py-14 lg:pl-[70px] lg:text-left md:text-left text-center ">
            <h2 className="lg:text-[45px] md:text-[40px] text-[28px] font-extrabold text-white lg:mt-0 md:mt-0 -mt-14">
              Become a Mender
            </h2>
            <div className="lg:w-[50%] md:w-[50%] w-full lg:hidden md:hidden flex ">
              <Image width={1000} height={1} src={Img} alt="" />
            </div>

            <h2 className="text-[15px] font-normal mt-6 text-[#E2E2E2] ">
              Join the Mended family and make a lasting impact on young lives.
              Together, let's tackle mental health challenges and create a
              brighter future. Empower the new generation and be a catalyst for
              positive change. Join us at Mended today and help shape a better
              world.
            </h2>
            <div className="relative">
              <button className="bg-[#FF6E05] z-10 cursor-pointer relative text-white font-semibold shadow-lg shadow-[#FFE75659] text-headingThree mt-12 rounded-[50px] px-10 py-3 capitalize ">
                join the family
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] md:w-[50%] w-full lg:flex md:flex hidden ">
            <Image width={1000} height={1} src={Img} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
