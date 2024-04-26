import Image from "next/image";
import React from "react";
import Icon from "../shapes/Icon";
import FotterInfo from "../text/FotterInfo";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4 items-center bg-[#212529] pt-[105px] pb-[20px]">
      <Image src="/logo.png" width={150} height={300} />
      <div className="flex items-center justify-center">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="text-white font-iranLight">صفحه اصلی</div>
        <div className="text-white font-iranLight">صفحه اصلی</div>
        <div className="text-white font-iranLight">صفحه اصلی</div>
        <div className="text-white font-iranLight">صفحه اصلی</div>
        <div className="text-white font-iranLight">صفحه اصلی</div>
        <div className="text-white font-iranLight">صفحه اصلی</div>
      </div>
      <div className="text-white font-iranMedium">شرکت ساختمانی و تاسیساتی فرمی دیراک</div>
      <div className="flex flex-col gap-4 mt-3">
        <FotterInfo />
        <FotterInfo />
        <FotterInfo />
        <FotterInfo />
      </div>
    </div>
  );
}
