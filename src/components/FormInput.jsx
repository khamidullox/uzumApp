import React from "react";

function FormInput({
  lebal,
  type,
  placeholder,
  name,
  errorInput,
  labelDawn,
  value,
}) {
  return (
    <label className={`form-control w-full max-w-lg `}>
      <div className="label">
        <span className="label-text">{lebal}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full max-w-lg rounded-none ${errorInput}  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-black  `}
        name={name}
        defaultValue={value}
      />
      <div className="label">
        <span></span>
        <span className="font-mono">{labelDawn}</span>
      </div>
    </label>
  );
}

export default FormInput;
