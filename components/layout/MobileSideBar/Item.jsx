import { ArrowDown, ArrowDown2 } from "iconsax-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ChildProject from "./ChildProject";

export default function Item(props) {
  const { title, subTitle: href, icon: child } = props;
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
  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={finalHeightOfAccordion}
      style={{ maxHeight: `${heightOfAccordion}px` }}
      className="flex flex-col overflow-hidden  transition-all duration-700"
    >
      {child.length == 0 && (
        <Link href={href} legacyBehavior>
          <div className="flex items-center gap-2">
            <a className="font-iranMedium">{title}</a>
            {child.length > 0 && (
              <ArrowDown2
                className={`${
                  isOpen ? "rotate-180" : "rotate-0"
                } transition-all duration-700`}
              />
            )}
          </div>
        </Link>
      )}
      {child.length > 0 && (
        <div
          ref={initialHeightOfAccordion}
          onClick={openHandler}
          className="flex items-center gap-2"
        >
          <span className="font-iranMedium">{title}</span>
          {child.length > 0 && (
            <ArrowDown2
              className={`${
                isOpen ? "rotate-180" : "rotate-0"
              } transition-all duration-700`}
            />
          )}
        </div>
      )}
      <div className="flex flex-col gap-4 pr-2 mt-2">
        {child.map((ele) => (
          <ChildProject {...{ title: ele.title, hrefs: ele.hrefs }} />
        ))}
      </div>
    </div>
  );
}
