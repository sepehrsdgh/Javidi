import React from "react";

export default function GreenBesideBlack(props) {
  const {
    title = "سرمایه‌گذار، مجری و بهره‌بردار",
    subTitle = "پروژه‌های ساختمانی مدرن",
  } = props;
  return (
    <div className="text-[#212529] tracking-[0px]">
      <span>{title}</span>
      <span className="mx-1"></span>
      <span className="text-[#5BA446]">{subTitle}</span>
    </div>
  );
}
