import React, { Fragment } from "react";
import { ChartApexAllPvz } from ".";
import useUidBase from "../hooks/useUidBase";

function ListPlanSrez({ grorpByPvz }) {
  let { calculateTotal } = useUidBase();
  let groupPvz = grorpByPvz();

  return Object.keys(groupPvz)
    .sort()
    .map((pvz, id) => {
      let limit =
        calculateTotal(groupPvz[pvz], "max") * 2 +
        calculateTotal(groupPvz[pvz], "start");
      return (
        <Fragment key={id}>
          <div>
            {" "}
            <h1>{pvz}</h1>
            {/* <h2 className=""> {calculateTotal(groupPvz[pvz], "max") * 2}</h2> */}
            <h2 className=""> {limit}</h2>
            <h2 className=""> {calculateTotal(groupPvz[pvz], "sim")}</h2>
            <h2 className=""> {calculateTotal(groupPvz[pvz], "sum")}</h2>
          </div>
          <ChartApexAllPvz pvzList={Object.keys(groupPvz).sort()} />
        </Fragment>
      );
    });
}

export default ListPlanSrez;
