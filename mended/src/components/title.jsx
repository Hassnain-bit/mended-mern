import React from "react";
import { Container } from "@/components";
const Title = ({ heading, subHeading }) => {
  return (
    <Container>
      <div>
        <h2 className="text-white lg:text-heading md:text-heading text-[36px] font-extrabold text-center">
          {heading}
        </h2>
        <h2 className="text-[#E2E2E2] lg:text-[17px] md:text-[17px] text-[15px] text-center mt-6 font-light lg:px-16">
          {subHeading}
        </h2>
      </div>
    </Container>
  );
};

export default Title;
