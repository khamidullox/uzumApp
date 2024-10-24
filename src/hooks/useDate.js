import { useEffect, useState } from "react";
import data from "../app/data";

let useDate = (user) => {
  const [date, setDate] = useState("");
  let dataTu = {};

  useEffect(() => {
    // Функция для получения строки даты в формате YYYY-MM-DD
    const getTodayDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Месяцы от 0 до 11
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    // Устанавливаем значение сегодняшней даты
    setDate(getTodayDate());
  }, []);
  if (user) {
    let filterData = data.otabek.filter((pvz) => pvz.uid == user.displayName);
    filterData.map((pvz) => {
      const { user } = pvz;
      dataTu = {
        adm1: user.adm1?.slice(0, -1) || null,
        adm2: user.adm2?.slice(0, -1) || null,
        adm3: user.adm3?.slice(0, -1) || null, 
        adm4: user.adm4?.slice(0, -1) || null,
        mfu: user.mfu?.slice(0, -1) || null,
        mng: user.mng?.slice(0, -1) || null,
      };
    });
  }
  return { date, dataTu };
};
export default useDate;
