import React from "react";
import ReactApexChart from "react-apexcharts";

const Overview_chart = () => {
  const chartOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: [
        "jan",
        "feb",
        "mar",
        "apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const chartData = [
    {
      name: "Series 1",
      data: [
        30,

        40, 25, 52, 49, 34, 20, 20, 30, 4, 40, 12,
      ],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <ReactApexChart
        options={chartOptions}
        series={chartData}
        type="bar"
        height={210}
      />
    </div>
  );
};

export default Overview_chart;
