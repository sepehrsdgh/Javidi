import { ArrowDown2 } from "iconsax-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function ChildProject(props) {
  const { title, hrefs } = props;
  const [isOpen, setIsOpen] = useState(false);
  const initialHeightOfAccordion = useRef(null);
  const finalHeightOfAccordion = useRef(null);
  const [heightOfAccordion, setHeightOfAccordion] = useState(
    initialHeightOfAccordion?.current?.offsetHeight
  );
  useEffect(() => {
    if (isOpen) {
      setHeightOfAccordion(finalHeightOfAccordion?.current?.scrollHeight);
    } else {
      setHeightOfAccordion(initialHeightOfAccordion?.current?.offsetHeight);
    }
  }, [isOpen]);
  return (
    <div
      ref={finalHeightOfAccordion}
      style={{ maxHeight: `${heightOfAccordion}px` }}
      className="flex flex-col gap-2 overflow-hidden  transition-all duration-700"
    >
      <div
        ref={initialHeightOfAccordion}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4"
      >
        <div className="w-16 font-iranBlack">{title}</div>
        <ArrowDown2
          className={`${
            isOpen ? "-rotate-90" : "rotate-90"
          } transition-all duration-700`}
        />
      </div>
      {isOpen && (
        <div className="flex font-iranBold flex-col gap-2 pr-2 mt-2">
          {hrefs.map((ele) => (
            <Link legacyBehavior href={ele.href}>
              <a>{ele.title}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
