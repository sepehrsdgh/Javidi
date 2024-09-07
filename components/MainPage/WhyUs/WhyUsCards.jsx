import React from "react";
import WhyUsCard from "../../cards/WhyUsCard";
import { allws } from "../../../utils/officeData";

export default function WhyUsCards() {
  return (
    <div className="flex flex-col gap-3">
      {allws.map((ele, i) => (
        <WhyUsCard {...ele} key={i} i={i} />
      ))}
    </div>
  );
}
