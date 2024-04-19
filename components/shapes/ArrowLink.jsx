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
          <div className="flex flex-col absolute -top-1 right-6 rotate-90">
            <div className="w-[6px] h-[6px]  bg-[#5BA446] rounded-full"></div>
            <SmallRec rotate="" />
          </div>
        </CircleBorder>
        <div className="text-[14px]">{title}</div>
      </a>
    </Link>
  );
}
