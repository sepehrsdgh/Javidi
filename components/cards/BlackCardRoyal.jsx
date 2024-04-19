import React from "react";
import SmallRec from "../shapes/SmallRec";
import CircleBorder from "../shapes/CircleBorder";
import ArrowLink from "../shapes/ArrowLink";

export default function BlackCardRoyal() {
  return (
    <div className="flex flex-col gap-4 text-white  items-center bg-[#212529] py-9 pr-[42px] pl-[34px] pb-8">
      <div className="text-[27px]">با ما تا رویاهایتان</div>
      <SmallRec height="h-12" />
      <div className="tracking-[0.48px] text-[32px] text-white flex flex-col  capitalize">
        <div>With Us Until</div>
        <div className="-mt-2 ml-1">Your Dreams</div>
      </div>
      <ArrowLink {...{ href: "/" }} />
    </div>
  );
}
