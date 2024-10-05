import React, { useEffect } from "react";
import { FormInput } from "../components";
import { Form, useActionData } from "react-router-dom";
import { BsCurrencyDollar, BsFillSendArrowUpFill } from "react-icons/bs";
import useBase from "../hooks/useBase";
import { GlobalLoading } from "react-global-loading";
import useDate from "../hooks/useDate";
import { useSelector } from "react-redux";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { FaSimCard } from "react-icons/fa";
export let action = async ({ request }) => {
  let formData = await request.formData();
  console.log();
  let plan = {
    start: formData.get("start") !== "" ? Number(formData.get("start")) : 0,
    max: formData.get("max") !== "" ? Number(formData.get("max")) : 0,
    sum: formData.get("sum") !== "" ? Number(formData.get("sum")) : 0,
    sim: formData.get("sim") !== "" ? Number(formData.get("sim")) : 0,
    date: formData.get("date"),
  };
  return plan;
};
function Home() {
  let plan = useActionData();
  let { date } = useDate();
  let { user } = useSelector((state) => state.user);
  let { addDocument, base } = useBase(plan);
  useEffect(() => {
    if (plan) {
      addDocument(plan);
    }
  }, [plan]);

  return (
    <Form
      method="post"
      className="flex items-center justify-center max-w-full md:ml-24 ml-2 h-screen flex-col lg:mt-0 md:mt-12 mt-24"
    >
      <div className="flex items-center justify-between flex-col gap-5 md:flex-row w-full px-5  ">
        <h2 className=" text-3xl font-medium  tracking-widest  ">Отчеты:</h2>
        <div>
          <h3 className="text-2xl font-medium text-[rgb(112,0,255)]  tracking-widest">
            {user.displayName}
          </h3>
        </div>
        <input
          className="bg-gray-50 text-base border-2 bg-none border-indigo-200  md:tracking-widest  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="date"
          name="date"
          defaultValue={date}
        />
      </div>
      <div className="mt-8 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
          <div className=" flex-col items-center item-border border border-emerald-500">
            <h3 className=" flex items-center justify-center gap-2 font-bold text-2xl text-emerald-600">
              <SiRelianceindustrieslimited />
              <span className=""> Лимит:</span>
            </h3>
            <FormInput
              lebal="Start:"
              placeholder={0}
              type="number"
              errorInput="text-xl font-bold font-mono tracking-widest "
              name="start"
            />
            <FormInput
              lebal="Max: "
              placeholder={0}
              type="number"
              errorInput="text-xl font-bold font-mono tracking-widest "
              name="max"
            />
          </div>
          <div className="flex flex-col items-center item-border border border-cyan-500">
            <h3 className=" flex items-center justify-center gap-2 font-bold text-2xl text-cyan-600">
              <BsCurrencyDollar />
              <span className=""> Смена оплаты:</span>
            </h3>
            <FormInput
              lebal="Sum:"
              placeholder={0}
              type="number"
              errorInput="text-xl font-bold font-mono tracking-widest "
              name="sum"
            />
          </div>
          <div className="flex flex-col items-center item-border border border-fuchsia-500">
            <h3 className=" flex items-center justify-center gap-2 font-bold text-2xl text-fuchsia-600">
              <FaSimCard />
              <span className=""> Ucell:</span>
            </h3>
            <FormInput
              lebal="SIM:"
              placeholder={0}
              type="number"
              errorInput="text-xl font-bold font-mono tracking-widest "
              name="sim"
            />
          </div>
        </div>
        <div className=" w-full mt-5 text-right mb-5 ">
          <button
            onClick={() => {}}
            className="btn btn-info px-10 md:w-52 w-full border-indigo-500 border-2 "
          >
            Отправить
            <BsFillSendArrowUpFill />
          </button>
        </div>
        <GlobalLoading />
      </div>
    </Form>
  );
}

export default Home;
