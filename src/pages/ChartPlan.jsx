import React from "react";
import { ChartPlanNumber, ChartApex, Loading } from "../components";
import useUidBase from "../hooks/useUidBase";
import { useSelector } from "react-redux";

function ChartPlan() {
  let { user } = useSelector((store) => store.user);
  const { summPlanPercent } = user.email.slice(-2) == "tu" ? {} : useUidBase();

  return (
    <>
      <div className=" w-full items-center flex justify-center my-10  ">
        <h2 className="text-2xl font-bold tracking-widest">Срез</h2>
      </div>
      {user.email.slice(-2) !== "tu" ? (
        summPlanPercent() ? (
          <div className=" flex flex-col gap-2 ">
            {<ChartApex srez={summPlanPercent().summPercent} />}
            {<ChartPlanNumber srez={summPlanPercent().counterAll} />}
          </div>
        ) : (
          <Loading />
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default ChartPlan;
