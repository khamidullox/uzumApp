import React from "react";
import {
  ChartPlanNumber,
  ChartApex,
  Loading,
  SkletionLoading,
  SelectChekDate,
} from "../components";
import useUidBase from "../hooks/useUidBase";
import { useSelector } from "react-redux";

function ChartPlan() {
  let { user } = useSelector((store) => store.user);
  const { summPlanPercent } = user.email.slice(-2) == "tu" ? {} : useUidBase();

  return (
    <div className="my-24 flex flex-col justify-center items-center">
      <div className=" w-full items-center flex  justify-between px-16">
        <h2 className="text-2xl font-bold tracking-widest">Срез</h2>
        <SelectChekDate />
      </div>
      {user.email.slice(-2) !== "tu" ? (
        summPlanPercent() ? (
          <div className=" flex flex-col gap-2 ">
            {<ChartApex srez={summPlanPercent().summPercent} />}
            {<ChartPlanNumber srez={summPlanPercent().counterAll} />}
          </div>
        ) : (
          <SkletionLoading />
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default ChartPlan;
