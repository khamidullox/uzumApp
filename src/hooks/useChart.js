const useChart = (groupPvz, calculateTotal) => {
  const groupAllSrez = () => {
    let dataAllPvzPlan = {
      limitAll: [],
      smenaAll: [],
      ucellAll: [],
    };
    Object.keys(groupPvz)
      .sort()
      .map((pvz, id) => {
        let limit =
          calculateTotal(groupPvz[pvz], "max") * 2 +
          calculateTotal(groupPvz[pvz], "start");
        dataAllPvzPlan.limitAll.push(limit);
        dataAllPvzPlan.smenaAll.push(calculateTotal(groupPvz[pvz], "sum"));
        dataAllPvzPlan.ucellAll.push(calculateTotal(groupPvz[pvz], "sim"));
      });
    // console.log(Object.keys(groupPvz).sort());
    return dataAllPvzPlan;
  };
  return { groupAllSrez };
};

export default useChart;
