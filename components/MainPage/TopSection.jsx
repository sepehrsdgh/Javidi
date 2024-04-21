import React from "react";
import BlackCardRoyal from "../cards/BlackCardRoyal";

export default function TopSection() {
  return (
    <div className="relative">
      <div className="absolute top-[20%]">
        <BlackCardRoyal />
      </div>
      <img src="/HeaderImage.jpeg" className="w-[78%] mr-auto" />
    </div>
  );
}
