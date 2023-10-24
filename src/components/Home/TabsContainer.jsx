"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import GainerLoser from "./GainerLoser";

const TabContainer = () => {
  const { data: GainerLoserData, isError, isLoading } = useTopGainerLoser();
  if (isError)
    return (
      <div className="mx-auto">
        Some Error has occured. Please try after sometime.
      </div>
    );
  return (
    <Tabs defaultValue="gainer" className="w-full relative">
      <div className="absolute w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10"></div>
      <TabsList className="grid w-full sm:w-1/5 grid-cols-2">
        <TabsTrigger value="gainer">Gainers</TabsTrigger>
        <TabsTrigger value="loser">Losers</TabsTrigger>
      </TabsList>
      <TabsContent value="gainer" className="w-full">
        {GainerLoserData?.Information ? (
          <div className="flex justify-between items-center p-4 text-red-500 rounded-xl">
            <span className="text-sm font-thin">
              {GainerLoserData?.Information}
            </span>
          </div>
        ) : (
          <GainerLoser
            data={GainerLoserData?.top_gainers}
            value={"gainer"}
            isLoading={isLoading}
          />
        )}
      </TabsContent>
      <TabsContent value="loser" className="w-full">
        {GainerLoserData?.Information ? (
          <div className="flex justify-between items-center p-4 text-red-500 rounded-xl">
            <span className="text-sm font-thin">
              {GainerLoserData?.Information}
            </span>
          </div>
        ) : (
          <GainerLoser
            data={GainerLoserData?.top_losers}
            value={"loser"}
            isLoading={isLoading}
          />
        )}
      </TabsContent>
    </Tabs>
  );
};

export default TabContainer;
