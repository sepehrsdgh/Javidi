import React from "react";
import ArrowLink from "../shapes/ArrowLink";

export default function ProjectCard() {
  return (
    <div className="bg-[#212529] flex flex-col text-white pt-5 px-[18px] pb-[13px]">
      <div className="text-[16px]  uppercase self-end">PROJECT 01</div>
      <div className="text-[20px]">ساخت آپارتمان در حکیم نظامی</div>
      <div className="self-end mt-3">
        <ArrowLink {...{ href: "/", title: "جزئیات پروژه" }} />
      </div>
    </div>
  );
}
