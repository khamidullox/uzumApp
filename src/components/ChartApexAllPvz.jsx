import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function ChartApxAllPvz({ pvzList }) {
  let [coulm, setCoulm] = useState({
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 40, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
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
          fontSize: "16px",
          colors: ["#304758"],
          // fontweight: "bold",
          // padding: "16px",
        },
      },

      xaxis: {
        categories: pvzList,
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
        text: "Monthly Inflation in Argentina, 2002",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={coulm.options}
          series={coulm.series}
          type="bar"
          height={350}
          width={1000}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ChartApxAllPvz;
