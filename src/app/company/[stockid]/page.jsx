import CompanyChart from "@/components/Company/CompanyChart";
import CompanyDetail from "@/components/Company/CompanyDetail";
export default function page({ params }) {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-10 relative gap-4 flex flex-col">
      {/* <CompanyChart Symbol={params.stockid} /> */}
      <CompanyChart Symbol={params.stockid} />
      <CompanyDetail TikerValue={params.stockid} />
    </div>
  );
}
