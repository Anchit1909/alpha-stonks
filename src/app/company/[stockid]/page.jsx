import CompanyChart from "@/components/Company/CompanyChart";
import CompanyDetail from "@/components/Company/CompanyDetail";
import V2CompanyChart from "@/components/Company/V2CompanyChart";
import V2CompanyDetail from "@/components/Company/V2CompanyDetail";
export default function page({ params }) {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-10 relative gap-4 flex flex-col">
      {/* <CompanyChart Symbol={params.stockid} /> */}
      {/* <V2CompanyDetail TikerValue={params.stockid} /> */}
      <V2CompanyChart Symbol={params.stockid} />
      <V2CompanyDetail TikerValue={params.stockid} />
    </div>
  );
}
