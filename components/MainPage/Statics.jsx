import React from "react";
import BlackStatictsCard from "../cards/BlackStatictsCard";

export default function Statics() {
  return (
    <div
      style={{
        backgroundImage: 'url("/HeaderImage.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="grid relative grid-cols-2 gap-[22.5px]"
    >
      <BlackStatictsCard />
      <BlackStatictsCard />
      <BlackStatictsCard />
      <BlackStatictsCard />
    </div>
  );
}
