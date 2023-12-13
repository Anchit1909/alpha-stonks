"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "./CardHeader";
import { useDataStore } from "@/utils/Hooks/useStore";
import { useRouter } from "next/navigation";
import GainerLoserLoader from "../Preloader/GainerLoserLoader";
import Link from "next/link";

const GainerLoser = ({ data, value, isLoading }) => {
  const [selectedValue, setSelectedValue] = useState("price");
  const {
    setTickerValue,
    setTickerPrice,
    setTickerChangePercentage,
    setGrowthValue,
  } = useDataStore();
  return (
    <Card className="w-full">
      <CardHeader className="w-full border-b dark:border-b-4 dark:border-black mb-4 dark:mb-0">
        <Header
          selectedValue={selectedValue}
          value={value}
          setSelectedValue={setSelectedValue}
        />
      </CardHeader>
      {isLoading ? (
        <>
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <GainerLoserLoader key={index} />
            ))}
        </>
      ) : (
        <>
          {data?.map(
            ({ ticker, price, change_amount, change_percentage, volume }) => (
              <CardContent
                className="dark:border-b-4 dark:border-black"
                key={ticker}
              >
                <div
                  className="flex justify-between items-center border-b dark:border-none dark:pt-6 h-10 px-2"
                  key={ticker}
                >
                  <Link
                    className="text-sm font-medium dark:text-white cursor-pointer"
                    href={`/company/${ticker}`}
                    onClick={() => {
                      setTickerValue(ticker);
                      setTickerPrice(price);
                      setTickerChangePercentage(change_percentage);
                      setGrowthValue(value);
                    }}
                  >
                    {ticker}
                  </Link>
                  <div className="hidden sm:flex w-1/2 justify-between text-center cursor-pointer">
                    <span className="text-sm font-medium">${price}</span>
                    <span className="text-sm font-medium">{change_amount}</span>
                    <div
                      className={`text-sm font-medium flex gap-1 justify-center items-center ${
                        value === "gainer" ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      <span>{change_percentage}</span>
                      {value === "gainer" ? <ChevronUp /> : <ChevronDown />}
                    </div>
                    <span className="text-sm font-medium">{volume}</span>
                  </div>
                  <div className="flex sm:hidden w-1/3 justify-end text-end">
                    <span className="text-sm font-medium">
                      {selectedValue === "price" && <>${price}</>}
                      {selectedValue === "change_amount" && change_amount}
                      {selectedValue === "change_percentage" && (
                        <div
                          className={`text-sm font-medium flex gap-1 justify-center text-end items-center ${
                            value === "gainer"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          <span>{change_percentage}</span>
                          {value === "gainer" ? <ChevronUp /> : <ChevronDown />}
                        </div>
                      )}
                      {selectedValue === "volume" && volume}
                    </span>
                  </div>
                </div>
              </CardContent>
            )
          )}
        </>
      )}
    </Card>
  );
};

export default GainerLoser;
