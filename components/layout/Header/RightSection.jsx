import { HambergerMenu, SearchNormal } from "iconsax-react";
import React from "react";
import SmallRec from "../../shapes/SmallRec";
import { useDispatch, useSelector } from "react-redux";
import { searchHandler, sideBarHandler } from "../../../context/slices/layoutSlice";

export default function RightSection() {
  const dispatch = useDispatch();
  const { sideBar, search } = useSelector((store) => store.layout);
  const setSideBarHandler = () => {
    dispatch(sideBarHandler(!sideBar));
  };
  const searchHandlerr = () => {
    dispatch(searchHandler(!search));
  };
  return (
    <div className="flex items-center gap-5">
      <SearchNormal
        onClick={searchHandlerr}
        className={`cursor-pointer ${
          search ? "text-[#5BA446]" : ""
        } transition-all duration-500`}
      />
      <SmallRec rotate="bg-black" />
      <HambergerMenu onClick={setSideBarHandler} className="cursor-pointer" />
    </div>
  );
}
