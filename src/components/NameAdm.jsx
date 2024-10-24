import React from "react";
import { FaUser, FaBuilding, FaUserTie } from "react-icons/fa";
import useDate from "../hooks/useDate";

function NameAdm({ user }) {
  let { dataTu } = useDate(user);
  let { adm1, adm2, adm3, adm4, mfu, mng } = dataTu;

  return (
    <>
      <h3 className=" text-center w-full font-bold text-xl">
        <span className=" font-mono">Сотрудники</span>: {user.displayName}
      </h3>
      <div className="flex flex-col md:flex-row justify-between w-full gap-6 p-5 bg-gray-50 rounded-lg shadow-md">
        <ul className="leading-8 space-y-3">
          {adm1 && (
            <li className="flex items-center gap-3">
              <FaUser className="text-blue-500" />
              <span className="font-bold">Админ:</span> <span>{adm1}</span>
            </li>
          )}
          {adm2 && (
            <li className="flex items-center gap-3">
              <FaUser className="text-blue-500" />
              <span className="font-bold">Админ:</span> <span>{adm2}</span>
            </li>
          )}
          {adm3 && (
            <li className="flex items-center gap-3">
              <FaUser className="text-blue-500" />
              <span className="font-bold">Админ:</span> <span>{adm3}</span>
            </li>
          )}
          {adm4 && (
            <li className="flex items-center gap-3">
              <FaUser className="text-blue-500" />
              <span className="font-bold">Админ:</span> <span>{adm4}</span>
            </li>
          )}
        </ul>
        <ul className="leading-8 space-y-3">
          {mfu && (
            <li className="flex items-center gap-3 ">
              <FaBuilding className="text-green-500" />
              <span className="font-bold">МФУ:</span> <span>{mfu}</span>
            </li>
          )}
          {mng && (
            <li className="flex items-center gap-3">
              <FaUserTie className="text-purple-500" />
              <span className="font-bold">Менеджер:</span> <span>{mng}</span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default NameAdm;
