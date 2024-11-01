import React, { useState } from "react";
import data from "../app/data";
import { IoIosArrowDown } from "react-icons/io";
import { AllPlanTu, ALlAdmNameTu } from "../components";
function ListPvzTu({ user }) {
  let [adm, setAdm] = useState(null);
  const onclickAll = (uid) => {
    setAdm((prev) => (prev ? null : uid));
  };
  return (
    <>
      <h3 className=" text-xl font-bold tracking-widest font-mono">
        ТУ: {user.displayName}
      </h3>
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10 ">
        {data["otabek"].map((pvz, id) => {
          let { plan, uid, user } = pvz;
          return (
            <li
              key={id}
              className="card bg-base-100 shadow-xl card-bod p-5 pb-3 md:w-96 w-80 max-w-full "
            >
              <div className="">
                <h2 className="card-title text-blue-800">{pvz.uid}</h2>
                <AllPlanTu pvz={pvz} />
                <div className="w-full flex justify-end">
                  <button
                    onClick={() => onclickAll(uid)}
                    className="flex items-end justify-end hover:bg-base-300  shadow cursor-pointer p-2 rounded-lg "
                  >
                    <span>Сотрудники</span>{" "}
                    <IoIosArrowDown className=" size-5" />
                  </button>
                </div>
                <div
                  className={`employee-list ${
                    adm === pvz.uid ? "active" : ""
                  } `}
                >
                  {" "}
                  {adm == uid && <ALlAdmNameTu pvz={pvz} adm={adm} />}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListPvzTu;
