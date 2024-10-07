import React, { Fragment } from "react";
import useBase from "../hooks/useBase";
import { useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { formatDayLimit, formatPlanDay } from "../app/fromatPlan";
import {
  FoizDone,
  Loading,
  PlanDayDone,
  fromatNumber,
  HeaderDayOtchet,
} from "../components";
import TopIconList from "../components/TopIconList";

// Функция для группировки по дате
const groupByDate = (base) => {
  return base.reduce((acc, item) => {
    const date = item.date; // Предполагаем, что в item есть поле date
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});
};

function ListOtchet() {
  let { base, deletBase, topChoose } = useBase();
  let { user } = useSelector((state) => state.user);

  const groupedBase = base ? groupByDate(base) : {};

  return (
    <div className=" mt-5 flex flex-col items-center justify-center gap-5 active:">
      <div>
        <h2 className=" text-3xl font-medium  tracking-widest">Очеты</h2>
      </div>

      {/* Если база данных доступна */}
      {base && (
        <div className="w-full">
          {Object.keys(groupedBase)
            .sort((a, b) => new Date(b) - new Date(a)) // Сортируем от новой к старой
            .map((date) => {
              return (
                <div
                  key={date}
                  className="mb-10 border shadow-lg p-5 rounded-xl "
                >
                  <HeaderDayOtchet date={date} />
                  <div className="grid lg:grid-cols-6 md:grid-cols-3 items-start justify-start sm:grid-cols-2 gap-1.5 text-base ">
                    {/* Отображение каждого отчета в группе по дате */}
                    {groupedBase[date]
                      .sort((a, b) => {
                        return topChoose(a, b);
                      })
                      .map((item, index) => {
                        return (
                          <Fragment key={item.id}>
                            <div
                              className={` border shadow-lg  p-2 hover:shadow-xl rounded-xl border-indigo-600 font-bold relative px-2 md:w-40 w-52 ${
                                user.displayName == item.user
                                  ? "  border-b-indigo-700 bg-blue-50"
                                  : ""
                              }`}
                            >
                              <h3 className="font-mono pb-1">
                                ПВЗ:{" "}
                                <span className=" font-bold">{item.user}</span>
                              </h3>
                              <ul className=" font-mono flex flex-col">
                                <li className="">
                                  <p>
                                    Start:{" "}
                                    <span className="">{item.start}</span>
                                  </p>
                                </li>
                                <li className=" flex justify-between relative border-b-2 ">
                                  <p>
                                    Max: <span>{item.max}</span>
                                  </p>
                                  <p className=" absolute right-2 bottom-3 rounded-xl border-green-600 border px-0.5 text-green-500 ">
                                    {formatDayLimit(
                                      item.max,
                                      item.start,
                                      formatPlanDay(item).dayLimit
                                    )}
                                    %
                                  </p>
                                </li>
                                <li className=" flex justify-between relative py-0.5 border-b-2 ">
                                  <p>
                                    {" "}
                                    SIM: <span>{item.sim}</span>
                                  </p>
                                  <p className=" absolute right-2 rounded-xl border-green-600 border px-0.5 text-green-500">
                                    {formatDayLimit(
                                      0,
                                      item.sim,
                                      formatPlanDay(item).dayUcell
                                    ) == Infinity
                                      ? ""
                                      : formatDayLimit(
                                          0,
                                          item.sim,
                                          formatPlanDay(item).dayUcell
                                        )}
                                  </p>
                                </li>
                                <li className="flex justify-between pr-2.5">
                                  <span>Смена:</span>{" "}
                                  <span>{fromatNumber(item.sum)}</span>
                                </li>
                                <li className="flex justify-end items-center">
                                  <p className="  rounded-xl border-green-600 border px-0.5 text-right text-green-500 mr-2 mt-">
                                    {formatDayLimit(
                                      0,
                                      item.sum,
                                      formatPlanDay(item).daySmena
                                    )}
                                    %
                                  </p>
                                </li>
                              </ul>
                              <button
                                onClick={() => {
                                  deletBase(item, user);
                                }}
                                className=" absolute top-2 right-1 p-1 bg-red-400 text-white rounded-xl"
                              >
                                <RiDeleteBin5Line />
                              </button>
                              <TopIconList index={index} />
                            </div>
                          </Fragment>
                        );
                      })}
                  </div>
                  {/* Отображение общей суммы SIM за день */}
                  <FoizDone groupedBase={groupedBase} date={date} />
                  <PlanDayDone groupedBase={groupedBase} date={date} />
                </div>
              );
            })}
        </div>
      )}

      {!base && <Loading />}
    </div>
  );
}

export default ListOtchet;
