import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import useUidBase from "../hooks/useUidBase";
const groupByMonth = (base) => {
  if (base) {
    return base.reduce((acc, item) => {
      const month = item.date.slice(0, 7); // Извлекаем год и месяц (формат "ГГГГ-ММ")
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(item);
      return acc;
    }, {});
  }
};
const ChartApex = () => {
  let { base } = useUidBase();
  console.log(groupByMonth(base));
  const [chart, setChart] = useState({
    series: [
      {
        name: "Выполнение",
        data: [80, 50, 5],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toFixed(0) + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: ["Лимит", "Смена", "Сим карт"],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + "%";
          },
        },
        max: 100, // Устанавливаем максимум на 100%
      },
      title: {
        text: `План выполнения для`,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="bar"
        height={350}
        width={900}
      />
    </div>
  );
};

export default ChartApex;
