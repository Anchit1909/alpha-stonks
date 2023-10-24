"use client";
import { ArrowRight, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import Link from "next/link";
import { Input } from "../ui/input";
import SearchModal from "../Search/SearchModal";

const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  const closeOnCurrent = (href) => {
    if (pathname === href) {
      toggleOpen();
    }
  };
  return (
    <div className="sm:hidden">
      <Menu onClick={toggleOpen} className="relative z-50 h-5 w-5" />

      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <div className="absolute bg-[#eae6e6] dark:bg-[#212121] shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            <div className="items-center space-x-4 sm:flex relative">
              {/* <Input
                className="w-full pl-10 rounded-2xl bg-foreground"
                placeholder="Search Stock & etfs"
              />
              <Search className="absolute top-2.5 text w-4 h-4 text-white dark:text-black" /> */}
              <SearchModal />
            </div>
            <div className="w-full flex justify-end">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileHeader;
