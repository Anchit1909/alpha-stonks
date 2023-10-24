import Link from "next/link";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import MobileHeader from "./MobileHeader";
import { Input } from "../ui/input";
import { CandlestickChart, Search } from "lucide-react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import SearchModal from "../Search/SearchModal";

const clash = localFont({
  src: "../../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
  display: "swap",
});

function Header() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b backdrop-blur-lg transition-all">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="md:px-10 px-2.5">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex z-40 font-semibold items-center gap-2"
            >
              <CandlestickChart className="text-primary" />
              <div className={cn(clash.className, "text-xl space-x-1")}>
                <span>Groww Stonks</span>
                <span className="text-primary">.</span>
              </div>
            </Link>
            <MobileHeader />
            <div className="hidden items-center space-x-4 sm:flex">
              {/* <Input
                className=" relative w-96 pl-10 rounded-2xl"
                placeholder="Search Stock & etfs"
              />
              <Search className="absolute w-4 h-4" /> */}
              <SearchModal />
            </div>
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
