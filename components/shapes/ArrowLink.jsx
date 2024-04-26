import React from "react";
import CircleBorder from "./CircleBorder";
import SmallRec from "./SmallRec";
import Link from "next/link";

export default function ArrowLink(props) {
  const {
    href = "/",
    title = "بیشتر بدانید",
    hideCircle,
    wrapperClass,
  } = props;
  return (
    <Link legacyBehavior href={href}>
      <a
        className={`flex items-center  gap-6 ${
          wrapperClass || "mr-[56px]"
        }  text-[#5BA446]`}
      >
        <CircleBorder
          className={`${
            !hideCircle ? "border-[#5BA446]" : "border-transparent"
          }`}
        >
          <div className="flex items-center absolute top-2 right-2">
            <div className="w-[6px] h-[6px]  bg-[#5BA446] rounded-full"></div>
            <div className="w-8 h-[2px] bg-[#5BA446]"></div>
          </div>
        </CircleBorder>
        <div className="text-[14px] font-iranMedium">{title}</div>
      </a>
    </Link>
  );
}
