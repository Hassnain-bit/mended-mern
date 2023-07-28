import React from "react";
import InfoSection from "./info-section";
import { Container } from "@/components";
import Img from "../../../public/assets/becomimg.svg";
import Img2 from "../../../public/assets/becomimg2.svg";
import Img3 from "../../../public/assets/becomimg3.svg";
import Img4 from "../../../public/assets/becomimg4.svg";

const whatsMenderSection = () => {
  return (
    <div className="mendorbg  pb-40 lg:pt-20 md:pt-20  ">
      <Container>
        <div className="grid justify-center lg:px-40 md:px-16 ">
          <InfoSection
            img={Img}
            color="#FF7811"
            order1="1"
            order2="2"
            heading="What is a Mender"
            subHeading="A mender is a licensed mental health professional that has decided to join the Mended family
"
          />
          <InfoSection
            img={Img2}
            color="#4CB6D8"
            order1="2"
            order2="1"
            heading="What does a Mender do? "
            subHeading="A mender offers mental health services to our users! Users are able to find menders 24’7, so if you’re a night owl, you will also have the ability to do late night sessions! "
          />

          <InfoSection
            img={Img3}
            color="#FB2659"
            order1="1"
            order2="2"
            heading="How does a Mender get paid? "
            subHeading="A mender gets paid on a sliding scale! They get paid per minute, and are able to find INSTANT clients"
          />
          <InfoSection
            img={Img4}
            color="#FCCD24"
            order1="2"
            order2="1"
            heading="How will Menders change the world?  "
            subHeading="We believe that change starts now, and we believe that together as a family we will be able to fight the mental health stigma and normalize it on a global scale. Our menders are the driving force to our community, they will be the light that is needed in difficult times"
          />
        </div>
      </Container>
    </div>
  );
};

export default whatsMenderSection;
