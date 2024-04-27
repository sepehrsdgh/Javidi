import React from "react";

export default function FotterInfo(props) {
  const { icon, subTitle = "fermidirac.co", href = "/", color: name } = props;
  return (
    <div className="flex flex-col items-center gap-3  text-white">
      <div className="tracking-[0px] text-[#5BA446] ubuntuBold uppercase">
        {name}
      </div>
      {subTitle.includes("https") ? (
        <a href={href} className="tracking-[0px] ubuntuMedium text-white">
          {subTitle}
        </a>
      ) : (
        <div className="tracking-[0px] font-iranLight">{subTitle}</div>
      )}
      {icon && <div className="font-iranLight">{icon}</div>}
    </div>
  );
}
