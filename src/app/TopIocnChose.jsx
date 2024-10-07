import { BsCurrencyDollar } from "react-icons/bs";
import { FaSimCard } from "react-icons/fa";
import { SiCodefactor, SiRelianceindustrieslimited } from "react-icons/si";

export let ChangeDefault = (chag) => {
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
