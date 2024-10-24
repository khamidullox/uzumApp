import React, { useRef } from "react";

function FormInput({
  lebal,
  type,
  placeholder,
  name,
  errorInput,
  labelDawn,
  value,
  className,
  refInp,
}) {
  return (
    <label
      className={`form-control w-full ${className ? className : "max-w-2xl"}  `}
    >
      <div className="label">
        <span className="label-text">{lebal}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full ${
          className ? className : "max-w-xl"
        } rounded-none ${errorInput}  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-black  `}
        name={name}
        defaultValue={value}
        ref={refInp}
      />
      <div className="label">
        <span></span>
        <span className="font-mono">{labelDawn}</span>
      </div>
    </label>
  );
}

export default FormInput;
