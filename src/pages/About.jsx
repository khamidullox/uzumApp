import React from "react";
import { useSelector } from "react-redux";
import { SingleAboutPlan } from "../components";
import ChartApex from "../components/ChartApex";
import NameAdm from "../components/NameAdm";
import PlanAbout from "../components/PlanAbout";

function About() {
  let { user } = useSelector((store) => store.user);
  return (
    <>
      <div className="    h-full flex items-start flex-col gap-3 justify-start mt-10 ">
        <NameAdm user={user} />
        <PlanAbout user={user} />
      </div>
      <div className="   flex max-w-7xl items-center justify-center">
        {/* <h3 className="md:text-6xl text-3xl font-semibold mb-52 opacity-70 ">
          В доработке...
        </h3> */}
      </div>
      {/* <ChartApex /> */}
    </>
  );
}

export default About;
