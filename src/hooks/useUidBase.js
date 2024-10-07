import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebaseConfing";

let useUidBase = (plan) => {
  let [base, setBase] = useState(null);
  let { user } = useSelector((state) => state.user);
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

  return { base };
};
export default useUidBase;
