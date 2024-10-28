import React from "react";
import { useSelector } from "react-redux";
import { NameAdm, PlanAbout } from "../components";

function About() {
  let { user } = useSelector((store) => store.user);
  return (
    <>
      <div className="    h flex items-center justify-center flex-col gap-3  mt-10 ">
        <NameAdm user={user} />
        <PlanAbout user={user} />
      </div>
    </>
  );
}

export default About;
