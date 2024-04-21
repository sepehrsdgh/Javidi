import React from "react";
import GreenBesideBlack from "../text/GreenBesideBlack";
import StepCard from "../cards/StepCard";
import { allDetail } from "../../utils/officeData";

export default function FourSteps() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-center">
          <GreenBesideBlack />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {allDetail.map((ele, i) => (
            <StepCard
              {...{
                title: ele.title,
                subTitle: ele.subTitle,
                Icon: ele.icon,
                key: i,
                index: i,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
