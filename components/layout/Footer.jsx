import Image from "next/image";
import React from "react";
import Icon from "../shapes/Icon";
import FotterInfo from "../text/FotterInfo";
import { addresses, allData, allSocial } from "../../utils/officeData";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4 items-center bg-[#212529] pt-[105px] pb-[20px]">
      <Image src="/logo.png" width={150} height={300} />
      <div className="flex items-center gap-4 mt-4">
        {allSocial.map((ele) => {
          const Icon = ele.icon;
          return (
            <a href={ele.subTitle} className="bg-white p-2 rounded-full">
              {<Icon size={16} />}
            </a>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {allData
          .filter((ele, i) => i != 2)
          .map((ele) => (
            <Link legacyBehavior href={ele.icon}>
              <a className="text-white font-iranLight">{ele.title}</a>
            </Link>
          ))}
      </div>
      <div className="text-white font-iranMedium">
        شرکت ساختمانی و تاسیساتی فرمی دیراک
      </div>
      <div className="flex flex-col gap-4 mt-3">
        {addresses.map((ele) => (
          <FotterInfo {...ele} />
        ))}
      </div>
    </div>
  );
}
