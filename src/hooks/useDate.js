import { useEffect, useState } from "react";

let useDate = () => {
  const [date, setDate] = useState("");

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

  return { date };
};
export default useDate;
