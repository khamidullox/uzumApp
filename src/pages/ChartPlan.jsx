import React from "react";
import {
  ChartPlanNumber,
  ChartApex,
  SkletionLoading,
  SelectChekDate,
  ListPlanSrez,
  SelectSimle,
} from "../components";
import useUidBase from "../hooks/useUidBase";
import { useSelector } from "react-redux";

function ChartPlan() {
  let { user } = useSelector((store) => store.user);
  const { summPlanPercent, grorpByPvz } = useUidBase();

  return (
    <div className="mb-10 mt-5 flex flex-col justify-between items-center">
      <div className=" w-full my-5 items-center flex  justify-between px-16">
        <h2 className="text-2xl font-bold tracking-widest">Срез</h2>
        {user.email.slice(-2) == "tu" && <SelectSimle />}
        <SelectChekDate />
      </div>
      {user.email.slice(-2) !== "tu" ? (
        summPlanPercent() ? (
          <div className=" flex flex-col gap-2 ">
            {<ChartApex srez={summPlanPercent().summPercent} />}
            {<ChartPlanNumber srez={summPlanPercent().counterAll} />}
          </div>
        ) : (
          <>
            <SkletionLoading />
          </>
        )
      ) : grorpByPvz() ? (
        <>
          <ListPlanSrez grorpByPvz={grorpByPvz} />
        </>
      ) : (
        <SkletionLoading />
      )}
    </div>
  );
}

export default ChartPlan;
