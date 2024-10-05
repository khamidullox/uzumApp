import {
  collection,
  query,
  where,
  onSnapshot,
  serverTimestamp,
  orderBy,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfing";
import toast from "react-hot-toast";
import { showLoading } from "react-global-loading";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

let useBase = (plan) => {
  let [base, setBase] = useState(null);
  let { user } = useSelector((state) => state.user);
  let { change } = useSelector((state) => state.top);
  let colection = "ilim";
  useEffect(() => {
    const q = query(collection(db, colection), orderBy("createAt"));
    onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({ ...doc.data(), id: doc.id });
      });
      setBase(cities);
    });
  }, [plan]);

  let addDocument = async (plan) => {
    showLoading(true);
    await addDoc(collection(db, colection), {
      ...plan,
      createAt: serverTimestamp(),
      user: user.displayName,
    });
    showLoading(false);
    toast.success("Отчет отправлен ");
  };

  let deletBase = (otchet, user) => {
    // deleteDoc(doc(db, colection, otchet.id));

    if (user.email.endsWith(".tu")) {
      return deleteDoc(doc(db, colection, otchet.id));
    }
    if (user.displayName == otchet.user) {
      toast.success("Ваш отчет удален ", {
        style: {
          border: "1px solid red ",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return deleteDoc(doc(db, colection, otchet.id));
    }

    toast.error("Вы можете удалать тлолько свой отчет", {
      iconTheme: {
        // primary: "#713200",
        // secondary: "red",
      },
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        background: "#500",
        color: "white",
      },
    });
  };

  let topChoose = (a, b) => {
    switch (change) {
      case "ucell":
        return b.sim - a.sim;
      case "limit":
        let aLimit = a.start + a.max * 2;
        let blimit = b.start + b.max * 2;
        return blimit - aLimit;
      case "smena":
        return b.sum - a.sum;
    }
  };
  return { addDocument, base, deletBase, topChoose };
};
export default useBase;
