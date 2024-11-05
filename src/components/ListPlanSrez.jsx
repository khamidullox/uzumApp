import React, { Fragment } from "react";
import { ChartApexAllPvz } from ".";
import useUidBase from "../hooks/useUidBase";
import useChart from "../hooks/useChart";

function ListPlanSrez({ grorpByPvz }) {
  const groupPvz = grorpByPvz();
  const { calculateTotal } = useUidBase();
  const { groupAllSrez } = useChart(groupPvz, calculateTotal);
  return (
    <>
      <ChartApexAllPvz
        pvzList={Object.keys(groupPvz).sort()}
        plannSrez={groupAllSrez().limitAll}
        plan="limit"
      />{" "}
      <ChartApexAllPvz
        pvzList={Object.keys(groupPvz).sort()}
        plannSrez={groupAllSrez().smenaAll}
        plan="smena"
      />{" "}
      <ChartApexAllPvz
        pvzList={Object.keys(groupPvz).sort()}
        plannSrez={groupAllSrez().ucellAll}
        plan="ucell"
      />
    </>
  );
}

export default ListPlanSrez;
