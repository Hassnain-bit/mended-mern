import React from "react";
import { Container } from "@/components";
import HomeFeature from "../../../public/assets/homefeature.svg";
import Teamimg from "../../../public/assets/becometeam.png";
import Image from "next/image";
import LeftMark from "../../../public/assets/marks.svg";
import RightMark from "../../../public/assets/marks2.svg";
const FeatureCard = ({ order1, order2, heading, subHeading }) => {
  return (
    <div className="flex bg-transparentz-10">
      <div
        style={{
          order: order1,
        }}
        className="w-[45%]"
      >
        <Image src={HomeFeature} width={420} height={1} alt="" />
      </div>
      <div
        style={{
          order: order2,
        }}
        className="w-[55%] flex items-center order-2"
      >
        <div>
          <h2 className="text-[#DBB82D] text-[36px] font-bold opacity-[80%]">
            {heading}
          </h2>
          <h2 className="text-[#FFFFFF] opacity-[50%] text-[18px] pr-12 ">
            {subHeading}
          </h2>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <Container>
      <div className="lg:px-12 md:px-12 px-0">
        <div className=" rounded-3xl border-[3px] pb-14   border-[#ffea7253] lg:px-28 md:px-16 px-3 bg-gradient-to-b relative from-[#122E28] to-[#011a1577]">
          <div className="flex justify-center">
            <h2 className="absolute drop-shadow-lg shadow-[#011F19] bg-transparent  lg:-top-10 md:-top-10 -top-7 text-white md:text-heading text-[33px] font-extrabold">
              Testimonials
            </h2>
          </div>

          {/* ...................... */}

          <div>
            <div className="flex justify-start  mt-20">
              <Image
                src={LeftMark}
                width={45}
                height={1}
                alt=""
                className="lg:-ml-12"
              />
            </div>
            <h2 className="lg:text-[22px] md:text-[22px] text-[18px] font-light    text-center  text-[#E2E2E2] ">
              Mended is providing me the opportunity to reach a larger range of
              clients in my state. In my personal opinion, Mended is brilliant.
              Game changer for us professionals.
            </h2>
            <div className="flex justify-end  ">
              <Image
                src={RightMark}
                width={45}
                height={1}
                alt=""
                className="lg:-mr-12"
              />
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <Image src={Teamimg} width={550} height={1} alt="" />
          </div>
          <h2 className="text-white text-[24px] font-bold text-center mt-4">
            Miranda
          </h2>
          <h2 className="text-white text-[18px] font-normal text-center">
            Psychologist, PhD
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default FeaturesSection;
