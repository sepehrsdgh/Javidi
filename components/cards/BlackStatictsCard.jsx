import React from "react";

export default function BlackStatictsCard(props) {
  const { title = "پروژه تکمیل شده", subTitle = "126" } = props;
  return (
    <div className="flex flex-col py-8 items-center justify-center bg-[#212529]">
      <div className="tracking-[0px] ubuntuBold text-[40px] text-[#5BA446]">
        {title}
      </div>
      <div className="text-[20px] tracking-[0px] font-iranBold text-[#E6E6E6]">{subTitle}</div>
    </div>
  );
}
