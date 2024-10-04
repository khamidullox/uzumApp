import React from "react";
import { foizPlan, getSimTotalForDate, summPlanDay } from "../app/fromatPlan";

function FoizDone({ groupedBase, date }) {
  let limit = foizPlan(
    summPlanDay().limit,
    getSimTotalForDate(groupedBase[date]).limit
  );
  const smena = foizPlan(
    summPlanDay().smena,
    getSimTotalForDate(groupedBase[date]).smena
  );
  const sim = foizPlan(
    summPlanDay().ucell,
    getSimTotalForDate(groupedBase[date]).sim
  );

  const borderColor = (plan) => {
    if (plan < 25) {
      return "border-red-500 text-red-600 bg-red-50";
    } else if (plan < 50) {
      return "border-orange-500 text-orange-600 bg-orange-50";
    } else if (plan < 75) {
      return "border-cyan-500 text-cyan-600 bg-cyan-50";
    } else {
      return "border-green-500 text-green-600 bg-green-50";
    }
  };

  console.log(sim);
  return (
    <ul className=" flex gap-16 items-center justify-center font-mono text-2xl my-4 ">
      <li className=" flex flex-col items-center ">
        <span
          className={`font-semibold p-2 rounded-xl  border-2 ${borderColor(
            limit
          )}`}
        >
          {" "}
          {limit}%
        </span>
        <span className="text-base">Лимит</span>
      </li>
      <li className=" flex items-center flex-col">
        <span
          className={`font-semibold p-2 rounded-xl border-2 ${borderColor(
            smena
          )}`}
        >
          {" "}
          {smena}%
        </span>
        <span className="text-base">Смена</span>
      </li>
      <li className=" flex items-center flex-col">
        <span
          className={`font-semibold p-2 rounded-xl border-2  ${borderColor(
            sim
          )}`}
        >
          {" "}
          {sim}%
        </span>
        <span className="text-base">Ucell</span>
      </li>
    </ul>
  );
}

export default FoizDone;
