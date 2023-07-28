import React from "react";
import { TeamCard, TeamMultiCard, Container } from "@/components";
import { TEAM_ARR } from "@/constants/data";
import Team1 from "../../../public/assets/team1.svg";
import Img2 from "../../../public/assets/team8.svg";
import Img3 from "../../../public/assets/team9.svg";

const MendedTeamSection = () => {
  const obj = {
    img: Team1,
    heading: "R. Jordan Perez",
    posts: "CEO & Founder",
  };

  const data = {
    img: Img2,
    img2: Img3,
    name1: "Alexander Perez",
    name2: "Tanner Grimes",
    name3: "Chiefs Youth Officers",
  };
  return (
    <div className="team-bg h-auto lg:pb-56 md:pb-48 pb-24 relative">
      <Container>
        <div className="flex justify-center">
          <div className=" absolute top-36 ">
            <TeamCard data={obj} />
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 justify-center mt-[360px] lg:gap-14 md:gap-14 gap-5">
            {TEAM_ARR.map((team) => (
              <div className="lg:mt-10 md:mt-10  mt-20 flex justify-center">
                <TeamCard data={team} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full mt-28">
          <TeamMultiCard data={data} />
        </div>
      </Container>
    </div>
  );
};

export default MendedTeamSection;
