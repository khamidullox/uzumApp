import React, { useEffect, useState } from "react";
import { Form, useActionData, Link } from "react-router-dom";
import FormInput from "../components/FormInput";
//hooks
import useLogin from "../hooks/useLogin";
import useError from "../hooks/useError";

export let action = async ({ request }) => {
  let dataFrom = await request.formData();
  let data = {
    login: dataFrom.get("login"),
    password: dataFrom.get("password"),
  };
  return data;
};
function Login() {
  let [img, setImg] = useState(1);
  let data = useActionData();
  let { login } = useLogin();
  let { errorInput, error } = useError();
  useEffect(() => {
    const interval = setInterval(() => {
      setImg((prevImg) => (prevImg < 6 ? prevImg + 1 : 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (data) {
      if (data.login.trim() !== "" && data.password.trim() !== "") {
        login(data);
      } else {
        errorInput(data);
      }
    }
  }, [data]);
  return (
    <div className="flex items-center gap-10 ransition-shadow h-screen">
      <figure
        className={` w-[70%] h-screen bg-cover bg-no-repeat lg:block md:black  hidden  transition-shadow transform`}
        style={{ backgroundImage: `url('/login_photo_${img}.jpg')` }}
      >
        <img className="" src={``} alt="" />
      </figure>
      <div className=" flex items-cent gap-5  justify-center ml-10 flex-col">
        <h2 className=" font-semibold text-xl">UZUM ADM</h2>
        <Form method="post" className="flex flex-col gap-2 w-72 ">
          <FormInput
            errorInput={error.newLogin}
            name="login"
            lebal="Login"
            type="text"
          />
          <FormInput
            errorInput={error.password}
            name="password"
            lebal="Password"
            type="password"
          />
          <button className="btn btn-primary w-full">Войти</button>
        </Form>
        {/* <Link
          className="link link-info text-center text-xs w-full"
          to="/registor"
        >
          Registor
        </Link> */}
      </div>
    </div>
  );
}

export default Login;
