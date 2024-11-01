import React from "react";
import { fromatNumber } from ".";
import { FaSimCard } from "react-icons/fa";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { BsCurrencyDollar } from "react-icons/bs";

function AllPlanTu({ pvz }) {
  let { plan, uid, user } = pvz;

  return (
    <div className="stats rounded-md my-2  stats-vertical lg:stats-horizontal text-xs w-full shadow border border-blue-400 p-2 gap-4">
      <div className="sta text-cyan-700 flex flex-col justify-center">
        <div className="st-value text-sm font-bold flex items-center gap-1">
          {plan.limit} <SiRelianceindustrieslimited className=" size-3" />
        </div>
        <div className="">Лимитов</div>
      </div>

      <div className="sta text-emerald-500 pl-2 flex flex-col  justify-center ">
        <div className=" text-sm font-bold flex items-center gap-0.5">
          {fromatNumber(plan.smena)}
          <BsCurrencyDollar />{" "}
        </div>
        <div className="tat-desc">Смена </div>
      </div>

      <div className="sta text-fuchsia-700 pl-2 flex flex-col  justify-center">
        <div className=""></div>
        <div className=" text-sm font-bold flex items-center gap-0.5">
          {plan.ucell} <FaSimCard className=" size-3" />
        </div>
        <div className="">Sim</div>
      </div>
    </div>
  );
}
export default AllPlanTu;
