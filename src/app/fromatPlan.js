import data from "./data";

export let formatPlan = (pvzs) => {
  let foundPvz = data["base"].find((pvz) => pvz.uid === pvzs.user);
  let { plan, uid } = foundPvz;
  let { smena, limit, ucell } = plan;
  return { smena, limit, ucell, uid };
};
