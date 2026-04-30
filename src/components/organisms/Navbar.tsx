"use client";
import { useState } from "react";
import { Globe } from "@/assets/icons/icons";
import Button from "../atoms/Button";

export default function Navbar() {
  const [locale, setLocale] = useState("en");
  return (
    <div className=" bg-white flex justify-between items-center ds-text-primary !p-3 md:!p-8 md:!px-21">
      {/* first section */}
      <div className="flex flex-row gap-3 items-center  ">
        <span>
          {" "}
          <Globe />
        </span>
        <span>Language Detect</span>
      </div>
      {/* //////////////////// */}
      {/* second section */}
      <div className="flex flex-col md:flex-row gap-2  items-center">
        <div className="flex gap-2 border-1 !p-1 rounded-3xl">
          <span>
            <Button
              className="!px-2 md:!px-3 !py-1  rounded-2xl"
              variant="ghost"
              active={locale == "en"}
              onClick={() => setLocale("en")}
              size="sm"
            >
              EN
            </Button>
          </span>
          <span>
            <Button
              size="sm"
              className="!px-2 md:!px-3 !py-1  rounded-2xl"
              variant="ghost"
              active={locale == "ar"}
              onClick={() => setLocale("ar")}
            >
              AR
            </Button>
          </span>
        </div>
        <Button
          variant="outline1"
          size="sm"
          className="border-1 border-primary hidden md:block  rounded-md !px-3 !p-1 "
        >
          starts
        </Button>
      </div>
      {/* ///////////////// */}
    </div>
  );
}
