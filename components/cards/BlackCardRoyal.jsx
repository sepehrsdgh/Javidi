import React from "react";
import SmallRec from "../shapes/SmallRec";
import CircleBorder from "../shapes/CircleBorder";
import ArrowLink from "../shapes/ArrowLink";
import { ArrowLeft, ArrowLeft2 } from "iconsax-react";
import CircleArrow from "../shapes/CircleArrow";

export default function BlackCardRoyal() {
  return (
    <div>
      <div className="flex flex-col gap-4 text-white  items-center bg-[#212529] py-9 pr-[42px] pl-[34px] pb-8">
        <div className="text-[27px] font-iranBold">با ما تا رویاهایتان</div>
        <SmallRec height="h-12" />
        <div className="tracking-[0.48px] text-[32px] ubuntuBold  text-white flex flex-col  capitalize">
          <div>With Us Until</div>
          <div className="-mt-2 ml-1 ">Your Dreams</div>
        </div>
        <ArrowLink {...{ href: "/" }} />
      </div>
      <div className="flex flex-col w-[22%] mt-1 gap-1 mr-2">
        <div className="rotate-180">
          <CircleArrow />
        </div>
        <div className="mr-2">
          <CircleArrow />
        </div>
      </div>
    </div>
  );
}
