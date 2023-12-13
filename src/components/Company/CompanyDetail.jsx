"use client";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useCompanyInfo } from "@/utils/Hooks/useCompanyInfo";
import { useDataStore } from "@/utils/Hooks/useStore";
import { ChevronDown, ChevronUp } from "lucide-react";

const CompanyDetail = ({ TikerValue }) => {
  const { data: info, isError, isLoading } = useCompanyInfo(TikerValue);
  const { tickerValue, tickerPrice, tickerChangePercentage, growthValue } =
    useDataStore();

  if (isLoading)
    return <div className="mx-auto text-muted-foreground">Loading...</div>;

  return (
    <div className="w-full flex">
      {isError ? (
        <div className="mx-auto">
          Some Error has occured. Please try after sometime.
        </div>
      ) : (
        <Card className="w-full">
          {!info || Object.keys(info).length === 0 ? (
            <>
              <CardHeader className="text-red-500">
                <CardTitle className="text-3xl font-bold text-center">
                  {TikerValue} Company Not Found.
                </CardTitle>
                <CardDescription className="text-center">
                  Please! try again or search for another company.
                </CardDescription>
              </CardHeader>
            </>
          ) : (
            <>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-medium">{info?.Name}</span>
                  <span className="text-lg font-medium">{`$${tickerPrice}`}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{info?.Symbol}</span>
                  <div
                    className={`text-lg font-medium flex gap-1 justify-center items-center ${
                      growthValue === "gainer"
                        ? "text-green-500"
                        : "text-red-500"
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

                <div className="text-sm text-muted-foreground border-t">
                  <div className="flex flex-col lg:flex-row justify-between pt-4 gap-4">
                    <div className="flex justify-start w-full lg:w-3/4 flex-col pt-2 text-accent-foreground font-medium">
                      <div className="flex gap-4 items-center py-4">
                        <Badge className="text-[12px] rounded-full text-white py-1">
                          SECTOR : {info?.Sector}
                        </Badge>
                        <Badge className="text-[12px] rounded-full text-white py-1">
                          INDUSTRY: {info?.Industry}
                        </Badge>
                      </div>
                      <span className="text-sm text-accent-foreground ">
                        About {info?.Name}
                      </span>
                      <p className="text-muted-foreground">
                        {info?.Description}
                      </p>
                      <div className="flex flex-row gap-4 pt-4 flex-wrap">
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
                        <div className="lg:hidden flex justify-start items-center flex-wrap pt-4 gap-4">
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
                              <CardTitle> P/E Ratio</CardTitle>
                              <CardDescription className="text-primary">
                                {info?.PERatio}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                          <Card className="flex-col flex justify-center items-center">
                            <CardHeader>
                              <CardTitle> Beta</CardTitle>
                              <CardDescription className="text-primary">
                                {info?.Beta}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                          <Card className="flex-col flex justify-center items-center">
                            <CardHeader>
                              <CardTitle> Profit Margin</CardTitle>
                              <CardDescription className="text-primary">
                                {info?.ProfitMargin}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                          <Card className="flex-col flex justify-center items-center">
                            <CardHeader>
                              <CardTitle> Dividend Yield</CardTitle>
                              <CardDescription className="text-primary">
                                {info?.DividendYield}%
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
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:flex justify-start w-full lg:w-1/4 items-center flex-wrap pt-4 gap-4">
                      <Card className="flex-col flex justify-start items-start flex-1">
                        <CardHeader>
                          <CardTitle>Market Cap</CardTitle>
                          <CardDescription className="text-primary border-b">
                            {Number(info?.MarketCapitalization)}
                          </CardDescription>
                          <CardTitle> EBITDA</CardTitle>
                          <CardDescription className="text-primary border-b">
                            {Number(info?.EBITDA)}
                          </CardDescription>
                          <CardTitle> P/E Ratio</CardTitle>
                          <CardDescription className="text-primary border-b">
                            {info?.PERatio}
                          </CardDescription>
                          <CardTitle> Beta</CardTitle>
                          <CardDescription className="text-primary border-b">
                            {info?.Beta}
                          </CardDescription>
                          <CardTitle> Profit Margin</CardTitle>
                          <CardDescription className="text-primary border-b">
                            {info?.ProfitMargin}
                          </CardDescription>
                          <CardTitle> Dividend Yield</CardTitle>
                          <CardDescription className="text-primary border-b">
                            {info?.DividendYield}%
                          </CardDescription>
                          <CardTitle>52 Week High</CardTitle>
                          <CardDescription className="text-primary border-b">
                            ${info?.["52WeekHigh"]}
                          </CardDescription>
                          <CardTitle>52 Week Low</CardTitle>
                          <CardDescription className="text-primary">
                            ${info?.["52WeekLow"]}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </>
          )}
        </Card>
      )}
    </div>
  );
};

export default CompanyDetail;
