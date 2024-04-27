import React from "react";
import BlackStatictsCard from "../cards/BlackStatictsCard";
import { allStats } from "../../utils/officeData";

export default function Statics() {
  return (
    <div
      style={{
        backgroundImage: 'url("/HeaderImage.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="grid relative grid-cols-2 p-4 gap-[22.5px]"
    >
      {allStats.map((ele) => (
        <BlackStatictsCard {...ele} />
      ))}
    </div>
  );
}
