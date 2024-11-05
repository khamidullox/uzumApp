import React from "react";
import ReactApexChart from "react-apexcharts";
import data from "../app/data";
import { useSelector } from "react-redux";
import { ChangeDefault } from "../app/TopIocnChose";

function ChartApxAllPvz({ pvzList, plannSrez, plan }) {
  let { simle } = useSelector((state) => state.top);
  let dataALlPvz = data["otabek"]
    .map((item, id) => ({
      name: item.uid,
      percent: Math.ceil((plannSrez[id] / item.plan[plan]) * 100),
    }))
    .sort((a, b) => {
      switch (simle) {
        case "hight":
          return b.percent - a.percent;
        case "dawn":
          return a.percent - b.percent;
        case "default":
          return;
      }
    });

  let coulm = {
    series: [
      {
        name: "Percentage",
        data: dataALlPvz.map((item) => item.percent), // Данные процентов
      },
    ],
    options: {
      chart: {
        height: 550,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toFixed(0) + "%"; // Форматирование процентов
        },
        offsetY: -20,
        style: {
          fontSize: "14px",
          colors: ["#3047fd"],
        },
      },
      xaxis: {
        categories: dataALlPvz.map((item) => item.name), // Имена категорий (uid)
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E3",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
        labels: {
          style: {
            fontWeight: "600",
          },
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
        max: 100,
      },
      title: {
        text: `Плны ${ChangeDefault(plan).name.slice(4, 15)}`,
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
          fontSize: "14px",
          position: "absolute",
        },
      },
    },
  };

  return (
    <div className="">
      <div className=" " id="chart">
        <ReactApexChart
          options={coulm.options}
          series={coulm.series}
          type="bar"
          height={350}
          width={900}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ChartApxAllPvz;
