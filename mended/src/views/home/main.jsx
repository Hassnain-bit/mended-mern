import React from "react";
import Image from "next/image";
import HeroSection from "./hero-section";
import SignupSection from "./signup-section";
import { Container } from "@/components";
import FeaturesSection from "./features-section";
import MendedTeamSection from "./mended-team-section";
import { Title, JoinBanner } from "@/components";
import DripImage from "../../../public/assets/bannerdrip.png";
import Glowimg from "../../../public/assets/homeheroglow.png";
import FeatureLeftImg from "../../../public/assets/featureleftimg.svg";
import FeatireRightImg from "../../../public/assets/featurerightimg.svg";
import FeatireRightImg2 from "../../../public/assets/featurerightimg2.svg";
import VisionImg from "../../../public/assets/visionicon.svg";
import SmallScreenLeftImg from "../../../public/assets/smallscreenleft.svg";
import TeamRightImage from "../../../public/assets/teamrightsmall.svg";
import BannerLeftImg from "../../../public/assets/bannerleftneon.svg";
const Main = () => {
  return (
    <React.Fragment>
      <div className="relative">
        <div className="homeherobg -mt-36 pt-36 lg:pb-44 md:pb-44 pb-36">
          <HeroSection />
        </div>
        <Image
          src={Glowimg}
          width={550}
          height={1}
          alt=""
          className="absolute right-0 lg:top-0 top-56 "
        />
        <Image
          src={VisionImg}
          width={200}
          height={1}
          alt=""
          className="absolute left-0 lg:hidden md:hidden block bottom-56"
        />
        <div>
          <Container>
            <h2 className="text-white lg:text-heading md:text-heading text-[35px] lg:font-extrabold md:font-extrabold font-bold text-center">
              Our Vision
            </h2>
            <h2 className="text-[#E2E2E2] lg:text-[17px] md:text-[17px] text-[15px] text-left mt-6 font-light lg:px-16">
              970 million people around the world struggle with mental illness
              and mental illness is still rapidly rising on a global scale.
              Mended will be a light in a dark world where mental health is
              frowned upon and stigmatized. We will normalize mental health,
              eradicate the stigma, and unite the world. At Mended, Love
              conquers all.
            </h2>
          </Container>
        </div>
      </div>
      <div className="relative">
        <Image
          src={FeatireRightImg2}
          width={100}
          height={1}
          alt=""
          className="absolute right-0 lg:-top-14 md:-top-14 top-[295px] lg:p-0 md:p-0 pl-14"
        />
        <div className="background flex justify-center lg:items-center items-start lg:pt-0 pt-14  lg:h-[150px] h-[400px] my-28 w-full ">
          <SignupSection />
        </div>
        <div className="relative">
          <Image
            src={FeatureLeftImg}
            width={100}
            height={1}
            alt=""
            className="absolute left-0 top-[20%] lg:flex md:flex hidden"
          />
          <Image
            src={SmallScreenLeftImg}
            width={140}
            height={1}
            alt=""
            className="absolute left-0 -bottom-32 lg:hidden md:hidden flex"
          />
          <Image
            src={FeatireRightImg}
            width={350}
            height={1}
            alt=""
            className="absolute right-0 lg:top-[16%] md:top-[16%] top-[13%] lg:pl-0 md:pl-0 pl-16"
          />
          <FeaturesSection />
        </div>
      </div>
      <div className="mt-28 relative">
        <Image
          src={TeamRightImage}
          width={190}
          height={1}
          alt=""
          className="absolute right-0 lg:hidden md:hidden flex top-28"
        />
        <div className="lg:px-56 md:px-44">
          <Title
            heading="Mended team"
            subHeading="A team connected by the passion of mental health and strengthened by the desire to change the world"
          />
        </div>
        <MendedTeamSection />
      </div>
      <div className="lg:mt-10 pb-24 w-full relative">
        <Image
          src={BannerLeftImg}
          width={75}
          height={1}
          alt=""
          className="absolute left-0 lg:hidden md:hidden flex -top-52"
        />
        <JoinBanner />
        <Image
          src={DripImage}
          width={80}
          height={1}
          alt=""
          className="absolute right-0 bottom-0 lg:flex md:flex hidden"
        />
      </div>
    </React.Fragment>
  );
};

export default Main;
