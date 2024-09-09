import React from "react";
import useBase from "../hooks/useBase";
import { fromatNumber } from "../components";
import { useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";

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
  let { base, deletBase } = useBase();
  let { user } = useSelector((state) => state.user);

  // Группировка базы данных по дате
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
            .map((date) => (
              <div key={date} className="mb-10">
                {/* Заголовок с датой */}
                <h3 className="text-xl font-semibold mb-4">Отчеты за {date}</h3>

                <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2 text-base ">
                  {/* Отображение каждого отчета в группе по дате */}
                  {groupedBase[date].map((item) => (
                    <div
                      className={` border p-2 hover:shadow-md rounded-xl font-bold relative px-4 ${
                        user.displayName == item.user
                          ? "  border-b-indigo-700 bg-indigo-50"
                          : ""
                      }`}
                      key={item.id}
                    >
                      <h3 className="font-mono pb-2">
                        ПВЗ: <span className=" font-bold">{item.user}</span>
                      </h3>
                      <ul>
                        <li className="font-mono">
                          Start: <span className="">{item.start}</span>
                        </li>
                        <li className=" font-mono">
                          Max: <span>{item.max}</span>
                        </li>
                        <li className="font-mono">
                          SIM: <span>{item.sim}</span>
                        </li>
                        <li className="font-mono">
                          Смена: <span>{fromatNumber(item.sum)}</span>
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {!base && (
        <div className=" w-full h-screen flex items-center mt-24 flex-col ">
          <span className="loading loading-spinner loading-lg size-16"></span>
        </div>
      )}
    </div>
  );
}

export default ListOtchet;
