import TabsContainer from "@/components/Home/TabsContainer";
import V2TabsContainer from "@/components/Home/V2TabsContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-10">
      {/* <div className="w-3/5 h-40 mb-4 p-4 rounded-md bg-card">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <Image
              src="/blackstone.avif"
              width={200}
              height={800}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-3">
            Wall Street titans confront ESG backlash as new financial risk
          </div>
        </div>
      </div> */}
      <TabsContainer />
    </main>
  );
}
