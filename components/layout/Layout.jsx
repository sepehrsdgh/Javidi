import React from "react";
import FinalHeader from "./Header/FinalHeader";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { sideBarHandler } from "../../context/slices/layoutSlice";

export default function Layout(props) {
  const { children } = props;
  const { sideBar } = useSelector((store) => store.layout);
  const dispatch = useDispatch();
  const router = useRouter();
  router.events?.on("routeChangeStart", () => {
    dispatch(sideBarHandler(false));
  });
  return (
    <div className="pr-[22px] py-[28px] pb-8 bg-[#F8F8F8] pl-[14px] flex flex-col gap-8">
      <FinalHeader />
      {!sideBar && children}
    </div>
  );
}
