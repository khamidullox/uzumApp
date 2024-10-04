import data from "../app/data";

function PlanDayDone({ groupedBase, date }) {
  return (
    <div className="flex lg:flex-row flex-col gap-2 pt-1 border-blue-300  mt-2 border rounded-xl justify-center font-medium">
      {data.base.map((pvz, i) => {
        return (
          <div
            key={i}
            className="flex lg:flex-col border-blue-300  justify-center lg:justify-normal items-center border-l pl-1"
          >
            <span> {pvz.uid}</span>
            <span>
              {groupedBase[date].map((item) => {
                if (item.user == pvz.uid) {
                  return "✅";
                }
              })}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default PlanDayDone;
