import { Instagram } from "iconsax-react";
import React from "react";

export default function Icon(props) {
  const { href = "/", icon = <Instagram width={4} /> } = props;
  return (
    <a
      href={href}
      className="w-[31px] h-[31px] rounded-full flex flex-col items-center justify-center"
    >
      {icon}
    </a>
  );
}
