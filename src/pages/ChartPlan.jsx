import React from "react";
import ChartApex from "../components/ChartApex";

function ChartPlan() {
  return (
    <>
      <div className=" w-full items-center flex justify-center my-10">
        <h2 className="text-2xl font-bold tracking-widest">Срез</h2>
      </div>
      <div>
        <ChartApex />
      </div>
    </>
  );
}

export default ChartPlan;
