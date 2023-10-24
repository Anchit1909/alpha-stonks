"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Card } from "../ui/card";
import { useStockChartData } from "@/utils/Hooks/useStockChartData";
import StockChart from "./StockChart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChartDataFormat } from "@/utils/ChartDataFormat";
import { ChartFilter } from "@/utils/ChartFilter";
import CompanyChartLoader from "../Preloader/CompanyChartLoader";
// import { ChartData as StockChartRawData } from "@/data/Chart";

const CompanyChart = ({ Symbol }) => {
  const [isMounted, setIsMounted] = useState(false);

  const [day, setDay] = useState("1year");
  const [chartType, setChartType] = useState("LineChart");
  const {
    data: StockChartRawData,
    isError,
    isLoading,
  } = useStockChartData(Symbol);

  const seriesData = ChartDataFormat(
    StockChartRawData,
    "Weekly Adjusted Time Series"
  );

  const FilteredStockData = useMemo(
    () => ChartFilter(day, seriesData),
    [day, seriesData]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (isError)
    return (
      <div className="mx-auto">
        Some Error has occured. Please try after sometime.
      </div>
    );

  if (isLoading) return <CompanyChartLoader />;
  return (
    <>
      <Card className="w-full p-4 relative">
        <div className="w-full flex justify-center flex-col gap-3 items-center">
          <div className="absolute w-32 h-32 -top-8 bg-primary/30 rounded-full blur-3xl z-10"></div>
          <h1 className="text-xl font-bold">{Symbol} Chart</h1>
          <h1 className="text-xl font-bold">
            {chartType} (Past {day})
          </h1>
        </div>
        <StockChart
          Symbol={Symbol}
          FilteredStockData={FilteredStockData}
          ChartType={chartType}
        />
        <div className="flex flex-col sm:flex-row w-full mt-8 justify-between items-center gap-3">
          <div className="flex justify-center">
            <button
              className={`rounded-l-xl p-2 shadow-md border-r border-b border-t w-14 ${
                day === "7days"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("7days")}
            >
              7d
            </button>
            <button
              className={`p-2 shadow-md border-r border-b border-t w-14 ${
                day === "1month"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("1month")}
            >
              1m
            </button>

            <button
              className={`p-2 shadow-md border-r border-b border-t w-14 ${
                day === "1year"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("1year")}
            >
              1y
            </button>
            <button
              className={`p-2 shadow-md border-r border-b border-t w-14 ${
                day === "10years"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("10years")}
            >
              10y
            </button>
            <button
              className={`p-2 shadow-md border-r border-b border-t rounded-r-xl w-14 ${
                day === "20years"
                  ? "bg-primary text-white"
                  : "bg-secondary bg-opacity-50"
              }`}
              onClick={() => setDay("20years")}
            >
              20y
            </button>
          </div>
          <Select
            defaultValue={chartType}
            onValueChange={(value) => setChartType(value)}
          >
            <SelectTrigger className="w-full sm:w-1/4 text-[12px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Chart Type</SelectLabel>
                <SelectItem value="LineChart">Line</SelectItem>
                <SelectItem value="CandlestickChart">CandleStick</SelectItem>
                <SelectItem value="AreaChart">Area</SelectItem>
                <SelectItem value="BarChart">Bar</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </Card>
    </>
  );
};

export default CompanyChart;
