"use client";
import { useState } from "react";
import { Globe } from "@/assets/icons/icons";
import Button from "../atoms/Button";
import { Globe2 } from "lucide-react";
import Icon from '@/components/atoms/Icon'
import { Locale, useLocale } from "next-intl";
import { changeLocaleAction } from "@/i18n/locale";

export default function Navbar() {
  const locale:Locale= useLocale();
  const nextLocale=locale==='en'?'en':'ar'
      console.log('locale isssssss',locale)
  
  return (
    <div className=" bg-white flex justify-between items-center ds-text-primary !p-3 md:!p-8 md:!px-21">
      {/* first section */}
      <div className="flex flex-row gap-3 items-center  ">
        <span>
          {" "}
          <Icon Icon={Globe} size={20} color="primary-300"/>
        </span>
        <span>Language Detect</span>
      </div>
      {/* //////////////////// */}
      {/* second section */}
      <div className="flex flex-col md:flex-row gap-2  items-center">
        <div className="flex gap-2 border-1 !p-1 rounded-3xl  ">
          <span>
            <Button
              className="!px-2 md:!px-3 !py-1  rounded-2xl"
              variant="ghost"
              active={nextLocale == "en"}
              onClick={() =>   changeLocaleAction('en')}
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
              active={nextLocale == "ar"}
              onClick={() =>   changeLocaleAction('ar')}
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
