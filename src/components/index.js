export { default as FormInput } from "./FormInput";
export { default as Novbar } from "./Novbar";
export { default as ProtectRuter } from "./ProtectRuter";

export let fromatNumber = (number) => {
  let newNumber = new Intl.NumberFormat("uz-UZ", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
  return newNumber;
};

