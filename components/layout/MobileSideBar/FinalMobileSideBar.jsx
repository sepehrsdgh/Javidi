import { CloseCircle, Whatsapp } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { sideBarHandler } from "../../../context/slices/layoutSlice";
import { allData, allSocial } from "../../../utils/officeData";

export default function FinalMobileSideBar() {
  const dispatch = useDispatch();
  const { sideBar } = useSelector((store) => store.layout);
  const setSideBarHandler = () => {
    dispatch(sideBarHandler(!sideBar));
  };
  return (
    <div className="flex flex-col justify-between pt-4 bg-white w-screen h-screen pr-3 pb-5">
      <div className="flex flex-col ">
        <CloseCircle
          onClick={setSideBarHandler}
          size={32}
          className="text-gray-600"
        />
        <div className="flex flex-col gap-8 pr-4">
          <Image src="/logo.png" width={160} height={320} />
          <div className="flex flex-col gap-8 pr-4">
            {allData.map((ele, i) => (
              <Item key={i} {...ele} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-4">
          {allSocial.map((ele, i) => {
            const Icon = ele.icon;
            return (
              <a
                key={i}
                href={ele.subTitle}
                className="border  border-black p-2 rounded-full"
              >
                {<Icon size={28} />}
              </a>
            );
          })}
        </div>
        <div className="text-[#212529] font-iranBold">
          شرکت ساختمانی و تاسیساتی فرمی دیراک
        </div>
      </div>
    </div>
  );
}
