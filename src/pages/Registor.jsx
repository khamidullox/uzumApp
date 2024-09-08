import React, { useEffect, useState } from "react";
import { Form, useActionData, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
//hooks
import useLogin from "../hooks/useLogin";
import useError from "../hooks/useError";

export let action = async ({ request }) => {
  let dataFrom = await request.formData();
  let data = {
    newLogin: dataFrom.get("newLogin"),
    password: dataFrom.get("password"),
    displayName: dataFrom.get("displayName"),
  };
  return data;
};
function Registor() {
  let data = useActionData();
  let { registor } = useLogin();
  let { errorInput, error } = useError();
  useEffect(() => {
    if (data) {
      if (
        data.newLogin.trim() !== "" &&
        data.password.trim() !== "" &&
        data.displayName.trim() !== ""
      ) {
        registor(data);
        console.log(data);
      }
      errorInput(data);
    }
  }, [data]);
  return (
    <div className="flex items-center gap-10 ransition-shadow h-screen">
      <figure
        className={` w-[70%] h-screen  transition-shadow transform  items-center lg:flex md:flex hidden justify-center flex-col`}
      >
        <h1 className=" font-bold text-[82px] text-purple-900 ">Uzum ADM</h1>
        <h2 className=" font-bold text-[82px] text-pink-700">Registor</h2>
      </figure>
      <div className=" flex items-cent gap-5  justify-center ml-10 flex-col">
        <h2 className=" font-semibold text-xl">UZUM ADM</h2>
        <Form method="post" className="flex flex-col gap-2 w-72 mr-10">
          <FormInput
            errorInput={error.displayName}
            name="displayName"
            lebal="Названия ПВЗ"
            type="text"
          />
          <FormInput
            errorInput={error.newLogin}
            name="newLogin"
            lebal="New Login"
            type="text"
          />
          <FormInput
            errorInput={error.password}
            name="password"
            lebal=" New Password"
            type="password"
          />
          <button className="btn btn-primary w-full">Войти</button>
        </Form>
        <Link
          className="link link-success text-xs text-center  w-72 "
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Registor;
