import data from "./data";

export let formatPlan = (pvzs) => {
  let foundPvz = data["base"].find((pvz) => pvz.uid === pvzs.user);
  let { plan, uid } = foundPvz;
  let { smena, limit, ucell } = plan;
  return { smena, limit, ucell, uid };
};

export let formatPlanDay = (pvzs) => {
  let foundPvz = data["base"].find((pvz) => pvz.uid === pvzs.user);
  let { plan, uid } = foundPvz;
  let { smena, limit, ucell } = plan;
  let day = 30;
  let daySmena = Math.round(smena / day);
  let dayLimit = Math.round(limit / day);
  let dayUcell = Math.round(ucell / day);

  return { daySmena, dayLimit, dayUcell, uid };
};
export let formatDayLimit = (max, start, dayLimit) => {
  let day = (max * 2 + start) / dayLimit;
  let dayPlan = Math.trunc(day * 100);
  return dayPlan;
};
