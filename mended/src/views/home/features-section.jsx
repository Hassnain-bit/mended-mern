import React from "react";
import { Container } from "@/components";
import HomeFeature from "../../../public/assets/homefeature.svg";
import HomeFeature2 from "../../../public/assets/homefeature2.svg";
import HomeFeature3 from "../../../public/assets/homefeature3.svg";
import HomeFeature4 from "../../../public/assets/homefeature4.svg";
import HomeFeature5 from "../../../public/assets/homefeature5.svg";
import Dotsimg from "../../../public/assets/dotsimg.png";
import Image from "next/image";

const FeatureCard = ({ order1, order2, heading, subHeading, img }) => {
  return (
    <div className="lg:flex md:flex lg:mt-0 md:mt-0 mt-16 bg-transparentz-10 features-res">
      <div
        style={{
          order: order1,
        }}
        className="lg:w-[45%] md:w-[50%] w-full flex lg:justify-start md:justify-start justify-center features-res2"
      >
        <Image src={img} width={280} height={1} alt="" />
      </div>
      <div
        style={{
          order: order2,
        }}
        className="lg:w-[55%] md:w-[50px] w-full flex items-center lg:text-left md:text-left text-center order-2 features-res2"
      >
        <div>
          <h2 className="text-[#FCCD24] lg:text-[36px] md:text-[36px] text-[24px] font-bold opacity-[80%]">
            {heading}
          </h2>
          <h2 className="text-[#FFFFFF] lg:opacity-[50%] md:opacity-[50%] opacity-70 lg:text-[18px] md:text-[18px] text-[14px] lg:pr-12 md:pr-12  ">
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
      <div className="lg:px-12">
        <div className="lg:mt-64 mt-52 rounded-3xl border-[3px] pb-28 relative  border-[#ffea7253] lg:px-14 px-2 bg-gradient-to-b lg:from-[#122e2890] md:from-[#122e2890] from-[#122e2825] to-[#011a1596] lg:backdrop-blur-sm md:backdrop-blur-sm ">
          <div className="flex justify-center">
            <h2 className="absolute drop-shadow-lg shadow-[#011F19] bg-transparent lg:-top-10 md:-top-10 -top-7 text-white lg:text-heading md:text-heading text-[33px] font-extrabold">
              Features
            </h2>
          </div>
          <Image
            src={Dotsimg}
            width={120}
            height={1}
            alt=""
            className="absolute top-0 left-0 z-0 opacity-[40%] lg:block md:block hidden"
          />

          {/* ...................... */}
          <div className=" mt-16 ">
            <FeatureCard
              heading="Home"
              subHeading="Allows users to create inspirational videos to share with the mended community. You can also watch videos of users who are nearby."
              order1="1"
              order2="2"
              img={HomeFeature}
            />
            <FeatureCard
              heading="Support groups"
              subHeading="Allows users to connect with other users who share similar challenges. Users are also able to upload videos, pictures, and play games with people in their support groups. Users can only join 1 support group at a time so that they can get to know all of the people in their support group."
              order1="2"
              order2="1"
              img={HomeFeature2}
            />
            <FeatureCard
              heading="Mending Locations Map"
              subHeading="Allows users to decompress and explore the real world around them. All mending locations are vetted by licensed psychologists."
              order1="1"
              order2="2"
              img={HomeFeature3}
            />
            <FeatureCard
              heading="Instant Therapy"
              subHeading="Users are able to receive instant therapy in the exact moment it is needed and can request group therapy within their support groups."
              order1="2"
              order2="1"
              img={HomeFeature4}
            />
            <FeatureCard
              heading="Gifting Space"
              subHeading="Users are able to purchase gifts for other users through our mended gifting space."
              order1="1"
              order2="2"
              img={HomeFeature5}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturesSection;
