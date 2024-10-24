import React from "react";
import { useSelector } from "react-redux";
import { SingleAboutPlan } from "../components";
import ChartApex from "../components/ChartApex";
import NameAdm from "../components/NameAdm";

function About() {
  let { user } = useSelector((store) => store.user);
  return (
    <>
      <div className=" max-w-w-3/4  h-full flex items-start flex-col gap-5 justify-start mt-10 ">
        <NameAdm user={user} />
      </div>
      <div className="   h-svh flex max-w-7xl items-center justify-center">
        <h3 className="md:text-6xl text-3xl font-semibold mb-52 opacity-70 ">
          В доработке...
        </h3>
      </div>
      {/* <ChartApex /> */}
    </>
  );
}

export default About;
