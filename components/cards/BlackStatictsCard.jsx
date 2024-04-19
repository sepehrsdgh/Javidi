import React from "react";

export default function BlackStatictsCard(props) {
  const { title = "پروژه تکمیل شده", subTitle = "126" } = props;
  return (
    <div className="flex flex-col my-12 mx-2 items-center justify-center bg-[#212529]">
      <div className="tracking-[0px] text-[40px] text-[#5BA446]">
        {subTitle}
      </div>
      <div className="text-[20px] tracking-[0px] text-[#E6E6E6]">{title}</div>
    </div>
  );
}
