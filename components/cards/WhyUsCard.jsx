import React, { useEffect, useRef, useState } from "react";
import { Transition } from "../../utils/transition";

export default function WhyUsCard(props) {
  const {
    title = "طراحی مقاوم",
    subTitle = "طراحی مقاوم در برابر بلایای طبیعی",
    i,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const initialHeightOfAccordion = useRef(null);
  const finalHeightOfAccordion = useRef(null);
  const [heightOfAccordion, setHeightOfAccordion] = useState(
    initialHeightOfAccordion?.current?.offsetHeight
  );
  useEffect(() => {
    if (isOpen) {
      setHeightOfAccordion(finalHeightOfAccordion?.current?.scrollHeight);
    } else {
      setHeightOfAccordion(initialHeightOfAccordion?.current?.offsetHeight + 4);
    }
  }, [isOpen]);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  const { animationClass } = new Transition(
    isOpen,
    "text-[#5BA446]",
    "text-[#212529]"
  ).getClass();
  return (
    <div
      onClick={openHandler}
      ref={finalHeightOfAccordion}
      style={{ maxHeight: `${heightOfAccordion}px` }}
      className="flex flex-col border-b-2 border-[#707070] pb-3 overflow-hidden  transition-all duration-700"
    >
      <div
        ref={initialHeightOfAccordion}
        className="flex items-center justify-between text-[#212529]"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 text-[34px]">
            <div>0{i+1}</div>
            <div></div>
          </div>
          <div className={`text-[32px] ${animationClass} font-iranUltraLight`}>
            {title}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[41.8px] h-[41.8px] text-[40px] text-[#5BA446] border-2 border-[#5BA446] rounded-full">
          <span className="-mt-2 cursor-pointer">{isOpen ? "-" : "+"}</span>
        </div>
      </div>
      <div className="text-[21px] text-[#54595F] font-iranBold mr-8">
        {subTitle}
      </div>
    </div>
  );
}
