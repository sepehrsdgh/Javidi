import React from "react";

export default function FotterInfo(props) {
  const {
    title = "Instagram",
    subTitle = "fermidirac.co",
    href = "/",
    subTitle2,
  } = props;
  return (
    <div className="flex flex-col items-center gap-3  text-white">
      <div className="tracking-[0px] text-[#5BA446] ubuntuBold uppercase">{title}</div>
      {href ? (
        <a href={href} className="tracking-[0px] ubuntuMedium text-white">
          {subTitle}
        </a>
      ) : (
        <div className="tracking-[0px] ">{subTitle}</div>
      )}
      {subTitle2 && <div>{subTitle2}</div>}
    </div>
  );
}
