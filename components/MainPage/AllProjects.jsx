import React from "react";
import FinalProjectCard from "../cards/FinalProjectCard/FinalProjectCard";
import GreenBesideBlack from "../text/GreenBesideBlack";
import { allProjects } from "../../utils/officeData";
import ArrowLink from "../shapes/ArrowLink";

export default function AllProjects() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="text-[#212529] ubuntuBold uppercase">OUR PROJECT</div>
        <GreenBesideBlack
          {...{ title: "پروژه های برگزیده شرکت", subTitle: "فرمی دیراک" }}
        />
        <div className="flex flex-col gap-20">
          {allProjects.map((ele, i) => (
            <FinalProjectCard key={i} {...ele} index={i} />
          ))}
        </div>
        <div className="my-20 flex flex-col items-center justify-center">
          <ArrowLink
            wrapperClass="mr-0 mt-8"
            {...{ title: "مشاهده همه پروژه ها" }}
          />
        </div>
        <div className="flex flex-col text-[24px] ubuntuBold items-center gap-1">
          <div className="text-[#212529]">YEARS OF SUCCESSFUL WORK</div>
          <div className="text-[#5BA446]">IN THE CONSTRUCTION</div>
        </div>
      </div>
    </div>
  );
}
