import React from "react";
import Container from "./container";
const JoinBanner = () => {
  return (
    <Container>
      <div className="lg:px-24">
        <div className="joinbg relative h-auto  lg:p-20 md:p-16 p-10 w-full rounded-3xl border-[3px] border-[#426966] ">
          <h2 className="text-white  lg:text-heading md:text-[40px] lg:leading-[50px] md:leading-[50px] leading-8 text-[24px] text-center lg:font-extrabold font-bold ">
            Join us to change the world together
          </h2>
          <div className="flex justify-center">
            <button className="bg-[#FF6E05] absolute -bottom-7 cursor-pointer  text-white font-semibold shadow-lg shadow-[#FFE75659] text-headingThree  rounded-[50px] px-10 py-4 capitalize ">
              join the family
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default JoinBanner;
