import React from "react";
import FinalHeader from "./Header/FinalHeader";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="pr-[22px] py-[28px] bg-[#F8F8F8] pl-[14px] flex flex-col gap-8">
      <FinalHeader />
      {children}
    </div>
  );
}
