import React from "react";
import { useDispatch } from "react-redux";
import { planSimle } from "../slices/topSlice";
function SelectSimle() {
  let dispatch = useDispatch();
  return (
    <select
      onChange={(v) => dispatch(planSimle(v.target.value))}
      className="select select-accent w-full max-w-72 "
    >
      <option value={"default"}>От А до Я </option>
      <option value={"hight"}>По возрастанию</option>
      <option value={"dawn"}>По убыванию</option>
    </select>
  );
}

export default SelectSimle;
