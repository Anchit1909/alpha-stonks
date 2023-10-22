"use client";
import { useTopGainerLoser } from "@/utils/Hooks/useTopGainerLoser";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

const TabsContainer = () => {
  const { data: GainerLoserData, isError, isLoading } = useTopGainerLoser();
  console.log(GainerLoserData);
  if (isError)
    return (
      <div className="w-sreeen min-h-[100vh-6rem] justify-center items-center flex text-xl font-bold">
        <h1>Something went wrong</h1>
      </div>
    );
  return <div>{JSON.stringify(GainerLoserData)}</div>;
};

export default TabsContainer;
