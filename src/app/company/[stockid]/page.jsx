import CompanyChartLoader from "@/components/Preloader/CompanyChartLoader";
import React, { lazy, Suspense } from "react";
// const V2CompanyChart = lazy(() => import("@/components/Company/V2CompanyChart"));
// const V2CompanyDetail = lazy(() => import("@/components/Company/V2CompanyDetail"));
const CompanyChart = lazy(() => import("@/components/Company/CompanyChart"));
const CompanyDetail = lazy(() => import("@/components/Company/CompanyDetail"));
export default function page({ params }) {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-10 relative gap-4 flex flex-col">
      <Suspense fallback={<CompanyChartLoader />}>
        <CompanyChart Symbol={params.stockid} />
        <CompanyDetail TikerValue={params.stockid} />
      </Suspense>
    </div>
  );
}
