import React from "react";
import { FaTelegram } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../slices/userSlice";

function NavbarRespons() {
  let { user } = useSelector((state) => state.user);
  let dispatch = useDispatch();

  return (
    <div className="  left-2 fixed top-2 ">
      {" "}
      <div className="dropdown  ">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm bg-base-100 dropdown-content  gap-1 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
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
          </li>
          <li>
            <ul className="flex gap-2 flex-col p-2 items-start justify-center">
              <li>
                <Link
                  className="tracking-widest link-hover hover:link-info"
                  to="/"
                >
                  Отчеты{" "}
                </Link>
              </li>
              <li>
                <Link
                  className=" tracking-widest link-hover hover:link-info"
                  to="/list"
                >
                  Общие
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="tracking-widest link-hover hover:link-info"
                >
                  ПВЗ
                </Link>
              </li>
              <li>
                <Link
                  to="/chartPlan"
                  className="tracking-widest link-hover hover:link-info"
                >
                  Срез
                </Link>
              </li>
            </ul>
          </li>
          <li className="link-hover link-info">
            <a
              className="flex items-center    "
              href="https://t.me/khamidullox"
              target="_blank"
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
              className=" text-xl text-red-500 tn-block  w-20 hover:text-black font-semibold border-b-2 hover:bg-red-300  border-b-red-200 rounded-lg "
            >
              Выйти
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarRespons;
