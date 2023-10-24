import React from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CompanyChartLoader = () => {
  return (
    <Card className="w-full p-4 ">
      <div className="w-full flex justify-center flex-col gap-3 items-center">
        <Skeleton className="w-1/5 h-4" />

        <Skeleton className="w-1/5 h-4" />
        <Skeleton className="w-10 h-4 m-2" />
      </div>
      <Skeleton className="w-full h-4 mt-5" />
      <Skeleton className="w-full h-4 mt-5" />
      <Skeleton className="w-full h-4 mt-5" />
      <Skeleton className="w-full h-4 mt-5" />
      <Skeleton className="w-full h-4 mt-5" />
      <Skeleton className="w-full h-4 mt-5" />
      <Skeleton className="w-full h-4 mt-5" />
      <Skeleton className="w-full h-4 mt-5" />
      <div className="mt-10 w-full flex justify-center">
        <Skeleton className="w-10 h-4 m-2" />
        <Skeleton className="w-10 h-4 m-2" />
        <Skeleton className="w-10 h-4 m-2" />
        <Skeleton className="w-10 h-4 m-2" />
        <Skeleton className="w-10 h-4 m-2" />
      </div>
    </Card>
  );
};

export default CompanyChartLoader;
