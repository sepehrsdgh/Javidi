import React from "react";
import FinalHeader from "./Header/FinalHeader";
import { useSelector } from "react-redux";

export default function Layout(props) {
  const { children } = props;
  const { sideBar } = useSelector((store) => store.layout);
  return (
    <div className="pr-[22px] py-[28px] pb-8 bg-[#F8F8F8] pl-[14px] flex flex-col gap-8">
      <FinalHeader />
      {!sideBar && children}
    </div>
  );
}
