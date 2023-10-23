"use client";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
// import { formatMarketCap } from "@/utils/Function/BillionConvertor";
import { useCompanyInfo } from "@/utils/Hooks/useCompanyInfo";
import { useDataStore } from "@/utils/Hooks/useStore";
import { ChevronDown, ChevronUp } from "lucide-react";
// import DetailSectionLoader from "../Loader/DetailSectionLoader";
// import ErrorComponent from "../Errors/Error";
import info from "@/data/OverviewData";

const CompanyDetail = ({ TikerValue }) => {
  // const { data: info, isError, isLoading, error } = useCompanyInfo(TikerValue);
  const { tickerValue, tickerPrice, tickerChangePercentage, growthValue } =
    useDataStore();
  // const {formattedPercentage, setFormattedPercentage} = useState(tickerChangePercentage);

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full flex">
      {false ? (
        <div>Error...</div>
      ) : (
        <Card className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-medium">{info?.Name}</span>
              <span className="text-lg font-medium">{`$${tickerPrice}`}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">{info?.Symbol}</span>
              <div
                className={`text-lg font-medium flex gap-1 justify-center items-center ${
                  growthValue === "gainer" ? "text-green-500" : "text-red-500"
                }`}
              >
                <span>{tickerChangePercentage}</span>
                {growthValue === "gainer" ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{info?.Exchange}</span>

              <span className="text-sm font-medium">{info?.Currency}</span>
            </div>

            <div className="text-sm text-muted-foreground border-t py-4">
              <div className="flex gap-4 items-center">
                <Badge className="text-[12px] rounded-full text-white py-1">
                  SECTOR : {info?.Sector}
                </Badge>
                <Badge className="text-[12px] rounded-full text-white py-1">
                  INDUSTRY: {info?.Industry}
                </Badge>
              </div>
              <div className="flex justify-start items-center flex-wrap pt-4 gap-4">
                <div className="flex justify-between items-center pt-2 text-accent-foreground font-medium">
                  <span className="text-sm">About {info?.Name}</span>
                </div>
                {info?.Description}
                <div className="flex justify-start items-center flex-wrap pt-4 gap-4">
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle>Market Cap</CardTitle>
                      <CardDescription className="text-primary">
                        {Number(info?.MarketCapitalization)}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle> EBITDA</CardTitle>
                      <CardDescription className="text-primary">
                        {Number(info?.EBITDA)}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle> PEG Ratio</CardTitle>
                      <CardDescription className="text-primary">
                        {info?.PEGRatio}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle> Dividend Yield</CardTitle>
                      <CardDescription className="text-primary">
                        {info?.DividendYield}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle> EPS</CardTitle>
                      <CardDescription className="text-primary">
                        {info?.EPS}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle> Analyst Target Price</CardTitle>
                      <CardDescription className="text-primary">
                        ${info?.AnalystTargetPrice}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle>52 Week High</CardTitle>
                      <CardDescription className="text-primary">
                        ${info?.["52WeekHigh"]}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle>52 Week Low</CardTitle>
                      <CardDescription className="text-primary">
                        ${info?.["52WeekLow"]}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle>50 Day Moving Average</CardTitle>
                      <CardDescription className="text-primary">
                        ${info?.["50DayMovingAverage"]}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle>200 Day Moving Average</CardTitle>
                      <CardDescription className="text-primary">
                        ${info?.["200DayMovingAverage"]}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="flex-col flex justify-center items-center">
                    <CardHeader>
                      <CardTitle>50 Day Moving Average</CardTitle>
                      <CardDescription className="text-primary">
                        ${info?.["50DayMovingAverage"]}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      )}
    </div>
  );
};

export default CompanyDetail;
