import React from "react";
import { FaBuilding, FaUser, FaUserTie } from "react-icons/fa";

function ALlAdmNameTu({ pvz, adm }) {
  let { adm1, adm2, adm3, adm4, mfu, mng } = pvz.user;

  return (
    <div className="">
      <ol className="  px-1 py-1 flex flex-col gap-1 list-decimal pl-5 font-medium marker:text-violet-700">
        <span className=" font-bold text-red-700 ">Админ</span>
        {adm1 && (
          <li className="">
            <span> {adm1}</span>
          </li>
        )}
        {adm2 && (
          <li className="">
            <span>{adm2}</span>
          </li>
        )}
        {adm3 && (
          <li className="">
            <span>{adm3}</span>
          </li>
        )}
        {adm4 && (
          <li className="">
            <span>{adm4}</span>
          </li>
        )}
      </ol>
      {(mfu || mng) && (
        <ul className="  px-1 py-1 list-decimal pl-5 font-medium marker:text-violet-700">
          {mfu && (
            <>
              <span className="font-bold text-green-500">МФУ:</span>
              <li className=" ">
                <span>{mfu}</span>
              </li>
            </>
          )}
          {mng && (
            <>
              <span className="font-bold text-blue-600">Менеджер:</span>
              <li className="">
                <span>{mng}</span>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}

export default ALlAdmNameTu;
