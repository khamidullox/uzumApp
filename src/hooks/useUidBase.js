import {
  collection,
  onSnapshot,
  orderBy,
  query,
  sum,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebaseConfing";
import useDate from "./useDate";

let useUidBase = (plan) => {
  let [base, setBase] = useState(null);
  let { user } = useSelector((state) => state.user);
  let { filterData } = useDate(user);
  let { plan: planPercent } = filterData[0];
  let { limit, smena, ucell } = planPercent;

  let colection = "ilim";
  useEffect(() => {
    const q = query(
      collection(db, colection),
      orderBy("createAt"),
      where("uid", "==", user.uid)
    );
    onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ ...doc.data(), id: doc.id });
      });

      setBase(cities);
    });
  }, [plan]);

  const groupByMonth = () => {
    let newObj = {};
    if (base) {
      newObj = base.reduce((acc, item) => {
        const month = item.date.slice(0, 7); // Извлекаем год и месяц (формат "ГГГГ-ММ")
        if (!acc[month]) {
          acc[month] = [];
        }
        acc[month].push(item);
        return acc;
      }, {});
    }

    let newObjKeys = Object.keys(newObj)[0];
    return { newObj, newObjKeys };
  };

  let { newObjKeys, newObj } = groupByMonth();

  let summPlanPercent = () => {
    if (base) {
      let counterA = 0;
      let counterB = 0;
      let counterC = 0;
      let counterD = 0;
      let counterAll = {
        max: 0,
        start: 0,
        smena: 0,
        limit: 0,
        ucell: 0,
      };
      let summPercent = {
        max: 0,
        start: 0,
        smena: 0,
        limit: 0,
        ucell: 0,
      };
      newObj[newObjKeys].map((item) => {
        summPercent = {
          max: (counterA += item.max),
          start: (counterB += item.start),
          smena: (counterC += item.sum),
          ucell: (counterD += item.sim),
          limit: counterA + counterB * 2,
        };
      });

      counterAll = {
        maxCount: counterA,
        startCount: counterB,
        smenaCount: counterC,
        ucellCount: counterD,
        limitCount: counterB + counterA * 2,
      };
      summPercent = {
        max: counterA,
        start: counterB,
        smena: Math.ceil((counterC / smena) * 100),
        ucell: Math.ceil((counterD / ucell) * 100),
        limit: Math.ceil(((counterB + counterA * 2) / limit) * 100),
      };

      return { summPercent, counterAll };
    }
  };

  return { base, groupByMonth, newObjKeys, newObj, summPlanPercent };
};
export default useUidBase;
