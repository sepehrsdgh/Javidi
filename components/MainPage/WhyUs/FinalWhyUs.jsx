import React from "react";
import GreenBesideBlack from "../../text/GreenBesideBlack";
import WhyUsCards from "./WhyUsCards";

export default function FinalWhyUs() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-[#212529] ubuntuBold text-[20px]">?WHY US</div>
      <GreenBesideBlack
        {...{ title: "چرا شرکت فرمی دیراک را", subTitle: "انتخاب کنیم؟" }}
      />
      <WhyUsCards />
      <img src="/sketch.jpg" />
    </div>
  );
}
