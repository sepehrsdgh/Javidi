import { HambergerMenu, SearchNormal } from "iconsax-react";
import React from "react";
import SmallRec from "../../shapes/SmallRec";

export default function RightSection() {
  return (
    <div className="flex items-center gap-5">
      <SearchNormal className="cursor-pointer" />
      <SmallRec rotate="bg-black" />
      <HambergerMenu className="cursor-pointer" />
    </div>
  );
}
