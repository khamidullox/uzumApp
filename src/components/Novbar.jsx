import React from "react";
import { logOutUser } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
function Novbar() {
  let dispatch = useDispatch();
  let { user } = useSelector((state) => state.user);

  return (
    <div className="navbar bg-base-100 pb-5   shadow-md rounded-lg flex flex-col justify-between fixed h-screen items-start max-w-28 w-full">
      <div className="flex flex-col gap-5">
        <Link
          to="/"
          className="bt text-xl flex flex-col items-center justify-center px-4 hover:bg-base-200 py-1 rounded-lg hover:shadow-lg border-b-2 border-b-blue-500 "
        >
          <strong className=" text-[rgb(112,0,255)]">UZUM</strong>
          <span className=" font-medium">ADM</span>
        </Link>
        <div className=" text-[17px] font-mono pl-2">
          {user.email.slice(-2) == "tu" ? (
            <p>
              ТУ: <span className="">{user.displayName}</span>
            </p>
          ) : (
            <p className="">
              ПВЗ: <span>{user.displayName}</span>
            </p>
          )}
        </div>
      </div>
      <div className=" text-xl font-medium flex mb-16 ">
        <ul className="flex gap-10 flex-col items-start justify-center">
          <li>
            <Link className="tracking-widest link-hover " to="/">
              Отчеты{" "}
            </Link>
          </li>
          <li>
            <Link className=" tracking-widest link-hover" to="/list">
              Общие
            </Link>
          </li>
          <li>
            <Link to="/about" className="tracking-widest link-hover">
              ПВЗ
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className=" flex flex-col items-start gap-5  justify-center  text-base font-mono">
          <li className="link-hover link-info">
            <a
              className="flex items-center justify-center   "
              href="https://web.telegram.org/k/#@khamidullox"
            >
              {" "}
              <FaTelegram />
              <span className=""> Telegram</span>
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(logOutUser());
              }}
              className=" text-xl text-red-500 hover:text-black font-semibold border-b-2 hover:bg-red-300 px-1 border-b-red-200 rounded-lg "
            >
              Выйти
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Novbar;
