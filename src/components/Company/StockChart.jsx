"use client";

import { useTheme } from "next-themes";
import React from "react";
import Chart from "react-google-charts";

const StockChart = ({ Symbol, FilteredStockData, ChartType }) => {
  const { theme } = useTheme();
  console.log(theme);
  const options = {
    legend: {
      textStyle: {
        color: theme === "dark" ? "#78716C" : "#A8A29E",
      },
    },
    animation: {
      duration: 1000, // Animation duration in milliseconds
      easing: "out", // Easing function
      startup: true, // Enable animation on startup
      trigger: "user", // Animation triggered by user interactions
    },
    backgroundColor: theme === "dark" ? "#0C0A09" : "#FFFFFF",
    hAxis: {
      textStyle: {
        color: theme === "dark" ? "#78716C" : "#A8A29E",
      },
    },
    vAxis: {
      textStyle: {
        color: theme === "dark" ? "#78716C" : "#A8A29E",
      },
    },
  };

  return (
    <div className="sm:h-[450px] h-[300px]">
      <Chart
        chartType={ChartType}
        height="100%"
        data={FilteredStockData}
        options={options}
      />
    </div>
  );
};

export default StockChart;
