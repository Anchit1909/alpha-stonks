import React from "react";
import { Skeleton } from "../ui/skeleton";

const SearchLoader = () => {
  return (
    <div className="flex justify-start items-center flex-wrap pt-4 gap-4 p-4">
      <Skeleton className="w-1/5 h-4" />
      <Skeleton className="w-full h-4 1" />
      <Skeleton className="w-full h-4 1" />
      <Skeleton className="w-full h-4 1" />
      <Skeleton className="w-full h-4 1" />
      <Skeleton className="w-full h-4 1" />
    </div>
  );
};

export default SearchLoader;
