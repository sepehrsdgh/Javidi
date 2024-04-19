import React from "react";

export default function StepCard(props) {
  const {title="تعریف پروژه",subTitle="ارائه طرح‌ توجیهی و سرمایه‌گذاری",icon} = props;
  return (
    <div className="flex flex-col">
      <div>{icon}</div>
      <div className="text-[20px] tracking-[0px] -mb-2 text-[#212529] opacity-100 self-end">
        {title}
      </div>
      <div className="flex items-center justify-between">
        <div className="tracking-[0px] text-[33px] text-[#E6E6E6] -mt-2">
          01
        </div>
        <SmallRec rotate="rotate-90 h-16 w-[1px] ml-8 !bg-[#212529]" />
      </div>
      <div className="text-[16px] tracking-[0px] -mt-4 text-[#70757B]">
        {subTitle}
      </div>
    </div>
  );
}
