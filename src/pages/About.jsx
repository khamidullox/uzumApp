import React from "react";
import { useSelector } from "react-redux";
import { SingleAboutPlan } from "../components";
import ChartApex from "../components/ChartApex";

function About() {
  let { user } = useSelector((store) => store.user);
  return (
    <>
      <div className=" max-w-w-3/4  h-full flex items-start justify-start mt-10 ">
        <div className=" text-start w-full flex items-center justify-center">
          <h2 className="text-xl font-medium tracking-widest">
            {user.displayName}
          </h2>
        </div>
      </div>
      <div className=" place-items-center w-full  h-svh flex items-center">
        <h3 className="md:text-6xl text-3xl font-semibold mb-52 opacity-70 ">
          В доработке...
        </h3>
      </div>
      {/* <ChartApex /> */}
    </>
  );
}

export default About;
