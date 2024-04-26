import { ArrowDown, ArrowDown2 } from "iconsax-react";
import Link from "next/link";
import React from "react";

export default function Item(props) {
  const {
    title = "صفحه اصلی",
    href = "/",
    child = [{ title: "مسکونی", hrefs: [{ title: "مسکونی 1", href: "/" }] }],
  } = props;
  return (
    <div className="flex flex-col">
      <Link href={href} legacyBehavior>
        <div className="flex items-center gap-2">
          <a className="font-iranMedium">{title}</a>
          {child.length > 0 && <ArrowDown2 />}
        </div>
      </Link>
      <div className="flex flex-col pr-2 mt-2">
        {child.map((ele) => (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div>{ele.title}</div>
              <ArrowDown2 className="rotate-90"/>
            </div>
            <div className="flex flex-col gap-2 pr-2 mt-2">
              {ele.hrefs.map((ele) => (
                <Link legacyBehavior href={ele.href}>
                  <a>{ele.title}</a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
