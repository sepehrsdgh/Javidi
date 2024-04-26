import React from "react";
import RightSection from "./RightSection";
import Image from "next/image";
import FinalMobileSideBar from "../MobileSideBar/FinalMobileSideBar";
import { useSelector } from "react-redux";
import { Transition } from "../../../utils/transition";

export default function FinalHeader() {
  const { sideBar } = useSelector((store) => store.layout);
  const { animationClass } = new Transition(
    sideBar,
    "opacity-100 ",
    "opacity-0  pointer-events-none",
    "duration-500"
  ).getClass();
  return (
    <div className="flex items-center justify-between">
      <RightSection />
      <Image src="/logo.png" width={80} height={160} />
      <div
        className={`fixed  lg:hidden top-0  bottom-0 right-0 left-0 ${animationClass}`}
      >
        <FinalMobileSideBar />
      </div>
    </div>
  );
}
