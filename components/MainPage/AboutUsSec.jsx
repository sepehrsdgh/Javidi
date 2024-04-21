import React from "react";
import GreenBesideBlack from "../text/GreenBesideBlack";
import { allP } from "../../utils/officeData";

export default function AboutUsSec() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="tracking-[0px] text-[#212529] uppercase">ABOUT US</div>
        <GreenBesideBlack
          {...{ title: "درباره شرکت فرمی دیراک", subTitle: "چه میدانید؟" }}
        />
        <div className="flex flex-col gap-2">
          <div>{allP[0]}</div>
          <div>{allP[1]}</div>
        </div>
      </div>
      <img src="/sketch.jpg" />
    </div>
  );
}
