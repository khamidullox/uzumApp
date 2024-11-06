import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import useUidBase from "../hooks/useUidBase";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const ChartApex = ({ srez }) => {
  let { user } = useSelector((state) => state.user);

  let { limit, smena, ucell } = srez;
  console.log(ucell);
  const chart = {
    series: [
      {
        name: "Выполнение",
        data: [limit, smena, ucell],
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
        categories: ["Лимит ", "Смена", "Сим карт"],
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
        max: 100,
      },
      title: {
        text: `План выполнения для ${user.displayName}`,
        align: "center",
        style: {
          color: "#00008B",
          fontSize: "18px",
        },
      },
    },
  };

  return (
    <div className="">
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="bar"
        height={350}
        width={800}
      />
    </div>
  );
};

export default ChartApex;
