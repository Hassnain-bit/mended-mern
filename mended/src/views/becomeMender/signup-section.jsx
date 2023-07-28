import React from "react";
import { Container } from "@/components";
const SignupSection = () => {
  const InputComponent = ({ label, placeholder }) => {
    return (
      <div className="bg-transparent lg:mt-0 md:mt-0 mt-1 w-full">
        <h2 className="bg-transparent text-[#FFFFFFB2] text-[14px]">{label}</h2>
        <input
          type="text"
          placeholder={placeholder}
          className="bg-white w-full  py-[6px] rounded-[3px] mt-1 placeholder:text-[10px] placeholder:text-[#00000080] placeholder:pl-2"
        />
      </div>
    );
  };

  return (
    <Container>
      <div className="bg-transparent relative">
        <h2 className="text-white bg-transparent text-[23px] -mt-3 opacity-[80%] text-center">
          Signup to become a Mender member
        </h2>

        <div className="bg-transparent lg:px-32 absolute w-full mt-6 ">
          <div
            style={{
              boxShadow: "0px 2.2666666507720947px 34px 0px #00000040",
            }}
            className="rounded-3xl border bg-[#193535CC] backdrop-blur-sm border-[#97D5D533] relative p-6 pb-20"
          >
            <div className="lg:flex md:flex justify-between bg-transparent  lg:px-10 md:px-8 px-1">
              <div className="w-full bg-transparent items-end lg:flex md:flex gap-8">
                <InputComponent label="Name" placeholder="Full name" />
                <InputComponent label="" placeholder="Last Name" />
              </div>
            </div>
            <div className="w-full bg-transparent items-end lg:flex md:flex gap-3 lg:px-10 md:px-8 px-1 pt-6">
              <InputComponent label="Date of Birth" placeholder="Month" />
              <InputComponent label="" placeholder="Day" />
              <InputComponent label="" placeholder="Year" />
            </div>
            <div className="w-full items-end bg-transparent lg:flex md:flex lg:px-10 md:px-8 px-1 pt-6 gap-8">
              <InputComponent
                label="Contact information"
                placeholder="Phone Number"
              />
              <InputComponent label="" placeholder="Email" />
            </div>
            <div className="  flex justify-center  items-center ">
              <button className="bg-[#FF6E05]  cursor-pointer absolute -bottom-7 text-white font-semibold shadow-lg shadow-[#FFE75659] text-headingThree  rounded-[50px] px-10 py-4 capitalize ">
                join the family
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignupSection;
