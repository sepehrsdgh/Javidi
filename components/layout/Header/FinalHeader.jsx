import React from "react";
import RightSection from "./RightSection";
import Image from "next/image";

export default function FinalHeader() {
  return (
    <div className="flex items-center justify-between">
      <RightSection />
      <Image src="/logo.png" width={80} height={160} />
    </div>
  );
}
