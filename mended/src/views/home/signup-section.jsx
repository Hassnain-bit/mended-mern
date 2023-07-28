import React, { useState } from "react";
import { Container } from "@/components";
import axios from "axios";

const SignupSection = () => {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (name !== "" && phoneNo !== "" && universityName !== "") {
      const data = {
        name: name,
        phone_no: phoneNo,
        university_name: universityName,
      };

      if (!loading) {
        let response = {};
        setLoading(true);
        await axios
          .post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signUp`, data)
          .then((res) => {
            response = res?.data;
            setLoading(false);
          })
          .catch((err) => {
            response = err?.response?.data;
            err?.response;
            setLoading(false);
          });
        alert(response?.message);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  const InputComponent = ({ label, placeholder }) => {
    return (
      <div className="bg-transparent w-auto lg:mt-0 mt-5">
        <h2 className="bg-transparent text-[#FFFFFFB2] text-[14px]">{label}</h2>
        <input
          type="text"
          placeholder={placeholder}
          className="bg-white lg:w-[165px]  w-full py-1 rounded-md mt-1 placeholder:text-[10px] placeholder:text-[#00000080] placeholder:pl-2 signup-input"
        />
      </div>
    );
  };

  return (
    <Container>
      <div className="bg-transparent relative">
        <h2 className="text-white bg-transparent lg:text-[25px] md:text-[25px] text-[23px] -mt-3 opacity-[80%] text-center">
          Signup for pre launch user
        </h2>

        <div className="bg-transparent lg:px-32 absolute w-full mt-6 signup-form2">
          <div
            style={{
              boxShadow: "0px 2.2666666507720947px 34px 0px #00000040",
            }}
            className="lg:rounded-[50px] rounded-3xl border bg-[#193535CC]  border-[#97D5D533] p-6 lg:pb-6 pb-14"
          >
            <div className="lg:flex justify-between bg-transparent backdrop-blur-lg sinup-form">
              <div className="lg:w-[70%] w-full bg-transparent lg:flex gap-3 signup-form3">
                <div className="bg-transparent w-auto lg:mt-0 mt-5">
                  <h2 className="bg-transparent text-[#FFFFFFB2] text-[14px]">
                    Your name
                  </h2>
                  <input
                    type="text"
                    placeholder="Full name"
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white lg:w-[165px]  w-full py-1 rounded-md mt-1 placeholder:text-[10px] placeholder:text-[#00000080] placeholder:pl-2"
                  />
                </div>
                <div className="bg-transparent w-auto lg:mt-0 mt-5">
                  <h2 className="bg-transparent text-[#FFFFFFB2] text-[14px]">
                    University Name
                  </h2>
                  <input
                    type="text"
                    placeholder="University Name"
                    onChange={(e) => setUniversityName(e.target.value)}
                    className="bg-white lg:w-[165px]  w-full py-1 rounded-md mt-1 placeholder:text-[10px] placeholder:text-[#00000080] placeholder:pl-2"
                  />
                </div>
                <div className="bg-transparent w-auto lg:mt-0 mt-5">
                  <h2 className="bg-transparent text-[#FFFFFFB2] text-[14px]">
                    Phone Number
                  </h2>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNo(e.target.value)}
                    className="bg-white lg:w-[165px]  w-full py-1 rounded-md mt-1 placeholder:text-[10px] placeholder:text-[#00000080] placeholder:pl-2"
                  />
                </div>
              </div>
              <div className="lg:w-[30%] relative w-full bg-transparent flex justify-center items-center signup-button">
                <button
                  onClick={handleSignUp}
                  className="bg-[#FF6E05] lg:relative cursor-pointer absolute lg:top-0 top-5 text-white font-semibold shadow-lg shadow-[#FFE75659] text-headingThree  rounded-[50px] px-10 py-4 capitalize signup-button2"
                >
                  {loading ? "Loading..." : "join the family"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignupSection;
