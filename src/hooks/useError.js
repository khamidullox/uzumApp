import { useState } from "react";

let useError = () => {
  let errorClass = {
    newLogin: "",
    password: "",
    displayName: "",
  };
  let [error, setError] = useState(errorClass);
  let errorInput = ({ newLogin, password, displayName }) => {
    let newError = { ...errorClass };
    if (newLogin && password && displayName) {
      setError(error);
    }
    if (!newLogin || !password) {
      if (!newLogin) newError.newLogin = "input-error";
      if (!password) newError.password = "input-error";
      if (!displayName) newError.displayName = "input-error";
      setError(newError);
    }
    if (newLogin && password && displayName) {
      setError(error);
    }
  };

  return { errorInput, error };
};

export default useError;
