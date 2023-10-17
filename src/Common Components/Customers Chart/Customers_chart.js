import React, { useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Customers_chart() {
  const options = {
    animationEnabled: true,
    title: {
      text: "Customers",
    },
    subtitles: [
      {
        text: "71% Positive",
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Unsatisfied", y: 5 },
          { name: "Very Unsatisfied", y: 31 },
          { name: "Very Satisfied", y: 40 },
          { name: "Satisfied", y: 17 },
          { name: "Neutral", y: 7 },
        ],
      },
    ],
  };

  return (
    <div className="overflow-y-auto h-64 rounded-lg shadow-lg">
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Customers_chart;
