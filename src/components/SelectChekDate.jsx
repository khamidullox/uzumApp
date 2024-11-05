import React from "react";
import { useDispatch } from "react-redux";
import { planMonth } from "../slices/topSlice";

function SelectChekDate() {
  let dispatch = useDispatch();
  return (
    <select
      onChange={(v) => dispatch(planMonth(v.target.value))}
      className="select select-info w-28 max-w-xs"
    >
      <option value={1}>Август</option>
      <option value={0}>Октябрь</option>
    </select>
  );
}

export default SelectChekDate;
