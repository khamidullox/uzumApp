import React from "react";
import useDate from "../hooks/useDate";
import { fromatNumber } from ".";
import { FaSimCard } from "react-icons/fa";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { BsCurrencyDollar } from "react-icons/bs";
import { formatPlanDay } from "../app/fromatPlan";

function PlanAbout({ user }) {
  let { filterData } = useDate(user);

  let { plan } = filterData[0];
  let { dayLimit, daySmena, dayUcell } = formatPlanDay(null, filterData[0]);
  return (
    <>
      <div className="flex items-center w-full justify-center">
        <h3 className=" font-semibold text-lg">Планы для выполнения</h3>
      </div>
      <div className="  w-full  p-3 sm:pl-12 rounded-lg items-center justify-center shadow-md grid sm:grid-cols-3 gap-5  font-semibold border">
        <>
          <ul className="flex flex-col ite gap-2 font-semibold">
            <li className=" pl-5">План</li>
            <li className="text-cyan-700 flex items-center gap-1">
              <SiRelianceindustrieslimited />
              Лимит
            </li>
            <li className="text-emerald-700 flex items-center gap-1">
              <BsCurrencyDollar />
              Смена{" "}
            </li>
            <li className="text-fuchsia-700 flex items-center gap-1">
              <FaSimCard />
              Ucell
            </li>
          </ul>
          <ul className="flex flex-col ite gap-2 text-base">
            <li className="">На месяц</li>
            <li className="text-cyan-700 font-bold">
              {plan.limit} <span className=" text-xs">лимитов</span>
            </li>
            <li className="text-emerald-700 font-bold">
              {fromatNumber(plan.smena)} <span className=" text-xs">сум</span>
            </li>
            <li className="text-fuchsia-700 font-bold">
              {plan.ucell}
              <span className=" text-xs"> сим карт </span>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-base">
            <li className="">На день </li>
            <li className="text-cyan-700 font-bold">
              {dayLimit}
              <span className=" text-xs"> лимитов</span>
            </li>
            <li className="text-emerald-700 font-bold">
              {fromatNumber(daySmena)}
              <span className=" text-xs"> сум</span>
            </li>
            <li className="text-fuchsia-700 font-bold">
              {dayUcell} <span className=" text-xs"> сим карт </span>
            </li>
          </ul>
        </>
      </div>
    </>
  );
}

export default PlanAbout;
