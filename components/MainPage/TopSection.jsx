import React from "react";
import BlackCardRoyal from "../cards/BlackCardRoyal";
import { useSelector } from "react-redux";
import { Transition } from "../../utils/transition";

export default function TopSection() {
  const { search } = useSelector((store) => store.layout);
  const { animationClass } = new Transition(
    search,
    "opacity-100 ",
    "opacity-0  pointer-events-none",
    "duration-500"
  ).getClass();
  return (
    <div className="relative">
      <input
        className={`outline-none ${animationClass} mx-auto block font-iranBlack text-center -mt-6 mb-4`}
        placeholder="جستجو"
      />
      <div className="absolute top-[20%]">
        <BlackCardRoyal />
      </div>
      <img src="/HeaderImage.jpeg" className="w-[78%] mr-auto" />
    </div>
  );
}
