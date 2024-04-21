import React from "react";
import SmallRec from "../shapes/SmallRec";

export default function StepCard(props) {
  const {
    title = "تعریف پروژه",
    subTitle = "ارائه طرح‌ توجیهی و سرمایه‌گذاری",
    Icon,
    index,
  } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="self-end">{<Icon size={48} color="#5BA446" />}</div>
      <div className="text-[20px] tracking-[0px] -mb-2 text-[#212529] opacity-100 self-end">
        {title}
      </div>
      <div className="flex items-center justify-between">
        <div className="tracking-[0px] text-[33px] text-[#E6E6E6]">
          0{index + 1}
        </div>
        <div className="w-24 h-[2px] bg-[#70757B] ml-1"></div>
      </div>
      <div className="text-[12px] whitespace-nowrap tracking-[0px]  text-[#70757B]">
        {subTitle}
      </div>
    </div>
  );
}
