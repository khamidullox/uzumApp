import { useRef } from "react";

const useClearInput = () => {
  const cleaInput = (refStart, refMax, refSmena, refSim) => {
    refMax.current.value = "";
    refStart.current.value = "";
    refSmena.current.value = "";
    refSim.current.value = "";
  };
  return { cleaInput };
};

export default useClearInput;
