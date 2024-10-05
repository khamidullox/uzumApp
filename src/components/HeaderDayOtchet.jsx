import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BsCurrencyDollar } from "react-icons/bs";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { FaSimCard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { topChange } from "../slices/topSlice";
import { SiCodefactor } from "react-icons/si";

function HeaderDayOtchet({ date }) {
  let { change } = useSelector((state) => state.top);
  let dispatch = useDispatch();
  let changeDefault = (chag) => {
    switch (chag) {
      case "ucell":
        return {
          name: "Топ по ucell",
          iocn: <FaSimCard />,
          color: "text-fuchsia-500",
          border: "border-fuchsia-500",
        };
      case "limit":
        return {
          name: "Топ по лимитам",
          iocn: <SiRelianceindustrieslimited />,
          color: "text-cyan-500",
          border: "border-cyan-500",
        };
      case "smena":
        return {
          name: "Топ по смене",
          iocn: <BsCurrencyDollar />,
          color: "text-emerald-500",
          border: "border-emerald-200",
        };
      case null:
        return {
          name: "Топ",
          iocn: <SiCodefactor />,
          color: "text-amber-500",
          border: "border-amber-500",
        };
    }
  };
  let { name, iocn, color, border } = changeDefault(change);
  return (
    <div className="flex md:items-center items-end md:flex-row flex-col justify-between md:px-5">
      <h3 className="text-xl font-semibold mb-4">Отчеты за {date}</h3>
      <Menu
        as="div"
        className="relative inline-block text-left pb-2 font-medium "
      >
        <div className=" ">
          <MenuButton
            className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text- font-semibold text-gray-900 shadow-sm ring-inset ring-gray-3 hover:bg-gray-50 text-base border outline-none ${border} `}
          >
            <div className={`flex items-center gap-2  ${color}`}>
              <span> {iocn}</span>
              <span> {name}</span>
            </div>
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-gray-400 "
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <button
                onClick={() => {
                  dispatch(topChange(null));
                }}
                className="w-full flex hover:text-amber-300  items-center gap-2 px-4 py-2 text-sm text-gray0 text-amber-800"
              >
                <SiCodefactor /> <span>Топ</span>
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => {
                  dispatch(topChange("smena"));
                }}
                className=" w-full flex hover:text-emerald-500  items-center gap-2 px-4 py-2 text-sm text-gra text-emerald-700  "
              >
                <BsCurrencyDollar /> <span>Топ по смене</span>
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => {
                  dispatch(topChange("limit"));
                }}
                className="w-full flex hover:text-cyan-400  items-center gap-2 px-4 py-2 text-sm text-gr  text-cyan-700 "
              >
                <SiRelianceindustrieslimited /> <span>Топ по лимитам</span>
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => {
                  dispatch(topChange("ucell"));
                }}
                className="w-full flex hover:text-fuchsia-400  items-center gap-2 px-4 py-2 text-sm text-gray0 text-fuchsia-800"
              >
                <FaSimCard /> <span>Топ по ucell</span>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default HeaderDayOtchet;
