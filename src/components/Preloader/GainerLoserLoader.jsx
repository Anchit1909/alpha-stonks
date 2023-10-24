import React from "react";
import { Skeleton } from "../ui/skeleton";

const GainerLoserLoader = () => {
  return (
    <div className="w-full flex justify-between items-center h-10 p-3">
      <Skeleton className="w-1/5 h-4" />
      <div className="hidden sm:flex w-1/2 justify-between">
        <Skeleton className="w-1/5 h-4" />
        <Skeleton className="w-1/5 h-4" />
        <Skeleton className="w-1/5 h-4" />
        <Skeleton className="w-1/5 h-4" />
      </div>
      <div className="flex sm:hidden w-1/3 justify-between">
        <Skeleton className="w-1/5 h-4" />
        <Skeleton className="w-1/5 h-4" />
        <Skeleton className="w-1/5 h-4" />
        <Skeleton className="w-1/5 h-4" />
      </div>
    </div>
  );
};

export default GainerLoserLoader;
