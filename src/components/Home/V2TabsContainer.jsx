"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import GainerLoser from "./GainerLoser";
import { stock as GainerLoserData } from "@/data/Stock";
const V2TabContainer = () => {
  return (
    <Tabs defaultValue="gainer" className="w-full relative">
      <div className="absolute w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10"></div>
      <TabsList className="grid w-full sm:w-1/5 grid-cols-2">
        <TabsTrigger value="gainer">Gainers</TabsTrigger>
        <TabsTrigger value="loser">Losers</TabsTrigger>
      </TabsList>
      <TabsContent value="gainer" className="w-full">
        {GainerLoserData?.Information ? (
          <div className="flex justify-between items-center bg-primary p-4 text-red-500 rounded-xl">
            <span className="text-sm font-thin">
              {GainerLoserData?.Information}
            </span>
          </div>
        ) : (
          <GainerLoser
            data={GainerLoserData?.top_gainers}
            value={"gainer"}
            isLoading={false}
          />
        )}
      </TabsContent>
      <TabsContent value="loser" className="w-full">
        {GainerLoserData?.Information ? (
          <div className="flex justify-between items-center bg-primary p-4 text-red-500 rounded-xl">
            <span className="text-sm font-thin">
              {GainerLoserData?.Information}
            </span>
          </div>
        ) : (
          <GainerLoser
            data={GainerLoserData?.top_losers}
            value={"loser"}
            isLoading={false}
          />
        )}
      </TabsContent>
    </Tabs>
  );
};

export default V2TabContainer;
