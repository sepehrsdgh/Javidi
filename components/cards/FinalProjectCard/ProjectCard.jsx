import React from "react";
import ArrowLink from "../../shapes/ArrowLink";

export default function ProjectCard(props) {
  const { title, icon, index } = props;
  return (
    <div className="bg-[#212529] flex flex-col text-white pt-5 px-[18px] pb-[13px]">
      <div className="text-[16px]  uppercase self-end ubuntuBold">
        PROJECT 0{index + 1}
      </div>
      <div className="text-[20px] font-iranBold">{title}</div>
      <div className="self-end mt-3">
        <ArrowLink {...{ href: { icon }, title: "جزئیات پروژه" }} />
      </div>
    </div>
  );
}
