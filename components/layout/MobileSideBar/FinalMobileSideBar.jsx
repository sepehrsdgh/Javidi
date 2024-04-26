import { CloseCircle } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { sideBarHandler } from "../../../context/slices/layoutSlice";

export default function FinalMobileSideBar() {
  const dispatch = useDispatch();
  const { sideBar } = useSelector((store) => store.layout);
  const setSideBarHandler = () => {
    dispatch(sideBarHandler(!sideBar));
  };
  return (
    <div className="flex flex-col pt-4 bg-white w-screen h-screen pr-3 pb-5">
      <CloseCircle
        onClick={setSideBarHandler}
        size={32}
        className="text-gray-600"
      />
      <div className="flex flex-col gap-8 pr-4">
        <Image src="/logo.png" width={160} height={320} />
        <div className="flex flex-col gap-8 pr-4">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}
