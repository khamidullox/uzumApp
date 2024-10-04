import data from "./data";

export let formatPlan = (pvzs) => {
  let foundPvz = data["base"].find((pvz) => pvz.uid === pvzs.user);
  let { plan, uid } = foundPvz;
  let { smena, limit, ucell } = plan;
  return { smena, limit, ucell, uid };
};

let day = 30;
export let formatPlanDay = (pvzs) => {
  let foundPvz = data["base"].find((pvz) => pvz.uid === pvzs.user);
  let { plan, uid } = foundPvz;
  let { smena, limit, ucell } = plan;
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

export let summPlanDay = () => {
  let summ = {
    smena: 0,
    ucell: 0,
    limit: 0,
  };
  data.base.map((item) => {
    Math.round((summ.smena += item.plan.smena / day));
    Math.round((summ.limit += item.plan.limit / day));
    summ.ucell += item.plan.ucell / day;
  });

  return summ;
};

// Считаем суммы для каждой даты
export const getSimTotalForDate = (items) => {
  let plan = {
    sim: 0,
    limit: 0,
    smena: 0,
  };

  plan.sim = items.reduce((total, item) => total + (item.sim || 0), 0);
  plan.limit = items.reduce(
    (total, item) => total + (item.start + item.max * 2 || 0),
    0
  );
  plan.smena = items.reduce((total, item) => total + (item.sum || 0), 0);
  return plan;
};

export let foizPlan = (plan, day) => {
  let foiz = Math.floor((day / plan) * 100);
  return foiz;
};

