import { useEffect, useState } from "react";
import data from "../app/data";

let useDate = (user) => {
  const [date, setDate] = useState("");
  let filterData = [];
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
    setDate(getTodayDate());
    setInterval(() => {
      setDate(getTodayDate());
    }, 10000);
  }, []);

  if (user) {
    filterData = data.otabek.filter((pvz) => pvz.uid == user.displayName);
    filterData.map((pvz) => {
      const { user } = pvz;
      dataTu = {
        adm1: user.adm1 || null,
        adm2: user.adm2 || null,
        adm3: user.adm3 || null,
        adm4: user.adm4 || null,
        mfu: user.mfu || null,
        mng: user.mng || null,
      };
    });
  }
  return { date, dataTu, filterData };
};
export default useDate;
