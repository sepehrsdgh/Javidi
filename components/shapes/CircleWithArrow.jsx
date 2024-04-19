import React from "react";
import CircleBorder from "./CircleBorder";
import { ArrowDown } from "iconsax-react";

export default function CircleWithArrow() {
    //arrow must be changed , i must write
  return (
    <CircleBorder className="border-[#54595F] !w-10 !border-1 relative !h-10">
      <ArrowDown className="rotate-90 w-8 top-[6px] right-3 absolute" />
    </CircleBorder>
  );
}
