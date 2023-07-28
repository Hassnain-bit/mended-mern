import React from "react";
import { Container } from "@/components";
import Image from "next/image";
import HeroImage from "../../../public/assets/homeheroimg.svg";
import HeroImage2 from "../../../public/assets/homeheroimg2.svg";
import HeroImageText from "../../../public/assets/homeheroimgtext.svg";
import Drip from "../../../public/assets/btnDrip.png";
import MendedImage from "../../../public/assets/mended.svg";
const HeroSection = () => {
  return (
    <Container>
      <div className="lg:flex justify-between ">
        <div className="lg:w-[45%] w-full lg:py-12 py-0 lg:pl-[70px] ">
          <h2 className="welcome-text  font-extrabold text-primary lg:text-left text-center opacity-[70%]">
            Welcome to
          </h2>
          <div className="flex justify-center">
            <Image
              src={MendedImage}
              width={450}
              height={1}
              alt=""
              className="lg:p-0 md:p-0 p-9 lg:-mt-6  md:-mt-6 -mt-12 "
            />
          </div>
          {/* <h2 className="lg:text-[170px] md:text-[170px] text-[100px] lg:text-left text-center font-normal lg:-mt-16 md:-mt-16 -mt-10 text-white font-driping">
            Mended
          </h2> */}
          <div className="lg:block hidden">
            <h2 className="text-headingT lg:text-left text-center font-normal mt-2 lg:pr-6  text-white ">
              A mental health social network that is a family built on love,
              health, creativity, and change
            </h2>
            <div className="relative">
              <button className="bg-[#FF6E05] z-10 cursor-pointer relative text-white font-semibold shadow-lg shadow-[#FFE75659] text-headingThree mt-12 rounded-[50px] px-14 py-4 capitalize ">
                join the family
              </button>
              <Image
                src={Drip}
                width={50}
                height={1}
                alt=""
                className="absolute left-4 top-[90%]"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[55%]  w-full lg:mt-0 -mt-12  ">
          <Image
            width={1000}
            height={1}
            src={HeroImage}
            alt=""
            className="lg:flex md:flex hidden"
          />
          <Image
            width={1000}
            height={1}
            src={HeroImage2}
            alt=""
            className="lg:hidden md:hidden flex mt-10 ml-[1px]"
          />
          <div className="flex justify-center">
            <Image
              width={120}
              height={1}
              src={HeroImageText}
              alt=""
              className="lg:hidden md:hidden flex mt-3 ml-[1px]"
            />
          </div>
        </div>

        <div className="lg:hidden block">
          <h2 className="lg:text-[20px] md:text-[20px] text-[15px] lg:px-6 md:px-6 mt-16 lg:text-left text-center font-normal lg:-mt-14 lg:pr-6  text-white ">
            A mental health social network that is a family built on love,
            health, creativity, and change
          </h2>
          <div className="relative lg:block justify-center flex">
            <button className="bg-[#FF6E05] z-10  cursor-pointer relative text-white font-semibold shadow-lg shadow-[#FFE75659] text-headingThree  mt-16 rounded-[50px] px-14  py-4 capitalize ">
              join the family
            </button>
            <Image
              src={Drip}
              width={50}
              height={1}
              alt=""
              className="absolute lg:left-4 left-[40%] top-[90%]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
