import React from "react";

export default function WhyUsCard(props) {
  const {
    title = "طراحی مقاوم",
    subTitle = "طراحی مقاوم در برابر بلایای طبیعی",
  } = props;
  return (
    <div className="flex flex-col border-b-2 border-[#707070] pb-3">
      <div className="flex items-center justify-between text-[#212529]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 text-[34px]">
            <div>01</div>
            <div></div>
          </div>
          <div className="text-[32px]">{title}</div>
        </div>
        <div className="flex flex-col items-center justify-center w-[41.8px] h-[41.8px] text-[40px] text-[#5BA446] border-2 border-[#5BA446] rounded-full">
          <span className="-mt-2 cursor-pointer">+</span>
        </div>
      </div>
      <div className="text-[21px] text-[#54595F] mr-8">{subTitle}</div>
    </div>
  );
}
