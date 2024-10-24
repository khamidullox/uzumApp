import React from "react";
import { useSelector } from "react-redux";
import { ChangeDefault } from "../app/TopIocnChose";
import { FaCrown } from "react-icons/fa";

function TopIconList({ index }) {
  let { change } = useSelector((stat) => stat.top);
  let { color, iocn } = ChangeDefault(change);
  if (index == 0 || index == 1 || index == 2) {
    return (
      change !== null && (
        <div
          className={`absolute -top-4 -left-2 text-lg font-bold origin-bottom -rotate-45 ${color}`}
        >
          <FaCrown className=" size-6  txt-orange-500  " />
          {/* {iocn} */}
        </div>
      )
    );
  }
}

export default TopIconList;
