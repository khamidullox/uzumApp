import React from "react";
import { fromatNumber } from ".";
import { FaSimCard } from "react-icons/fa";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { BsCurrencyDollar } from "react-icons/bs";

function ChartPlanNumber({ srez }) {
  let { limitCount, smenaCount, ucellCount, maxCount, startCount } = srez;
  return (
    <div className=" mb-10">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full max-w-4xl border-blue-500 border">
        <div className="stat">
          <div className="stat-title font-mono font-semibold">Лимит</div>
          <div className="stat-value flex gap-2 items-center text-cyan-500 ">
            {startCount} <SiRelianceindustrieslimited className=" size-8  " />
          </div>
          <div className="stat-desc font-bold">старт</div>
        </div>

        <div className="stat">
          <div className="stat-title font-mono font-semibold">Лимит</div>
          <div className="stat-value flex gap-2 items-center text-cyan-500">
            {maxCount} <SiRelianceindustrieslimited className=" size-8  " />
          </div>
          <div className="stat-desc font-bold">макс</div>
        </div>

        <div className="stat">
          <div className="stat-title font-mono font-semibold">Смена</div>
          <div className="stat-value flex gap-2 items-center text-emerald-500">
            {fromatNumber(smenaCount)}{" "}
            <BsCurrencyDollar className=" size-10   " />
          </div>
          <div className="stat-desc font-bold">сум</div>
        </div>
        <div className="stat">
          <div className="stat-title font-mono font-semibold">Ucell</div>
          <div className="stat-value flex gap-2 items-center text-fuchsia-500 ">
            {ucellCount} <FaSimCard className=" size-8 " />
          </div>
          <div className="stat-desc font-bold">sim</div>
        </div>
      </div>
    </div>
  );
}

export default ChartPlanNumber;
