export { default as FormInput } from "./FormInput";
export { default as Novbar } from "./Novbar";
export { default as ProtectRuter } from "./ProtectRuter";
export { default as FoizDone } from "./FoizDone";
export { default as Loading } from "./Loading";
export { default as PlanDayDone } from "./PlanDayDone";
export { default as HeaderDayOtchet } from "./HeaderDayOtchet";

export let fromatNumber = (number) => {
  let newNumber = new Intl.NumberFormat("uz-UZ", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
  return newNumber;
};
