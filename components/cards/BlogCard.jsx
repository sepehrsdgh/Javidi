import { Calendar1 } from "iconsax-react";
import React from "react";
import SmallRec from "../shapes/SmallRec";
import ArrowLink from "../shapes/ArrowLink";

export default function BlogCard() {
  return (
    <div className="bg-[#212529] flex flex-col items-start gap-3 text-white py-7 pr-6 pl-4 pb-6">
      <div className="flex items-center justify-center gap-1">
        <div className="flex  items-center gap-1 ">
          <div>21</div>
          <div>اردیبهشت</div>
          <div>1403</div>
        </div>
        <Calendar1 color="white" />
        <SmallRec rotate="bg-white !rotate-90" h="h-full" />
      </div>
      <div className="text-[18px]">شرکت در رونمایی سومین مجله رام</div>
      <div className="">
        <ArrowLink wrapperClass="mr-0" title="جزییات خبر" hideCircle={true} />
      </div>
    </div>
  );
}
