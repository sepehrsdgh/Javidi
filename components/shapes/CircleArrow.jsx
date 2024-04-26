import React from "react";
import CircleBorder from "./CircleBorder";
import { ArrowLeft } from "iconsax-react";

export default function CircleArrow() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <CircleBorder className="!w-8 !h-8 border-[#54595F]" />
        <div className="w-6 h-[2px] bg-[#54595F] absolute top-[16px] right-4"></div>
        <ArrowLeft
          size={24}
          className="absolute text-[#54595F] top-[5px] right-9"
        />
      </div>
    </div>
  );
}
