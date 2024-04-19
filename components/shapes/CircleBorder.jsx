import React from "react";

export default function CircleBorder(props) {
    const {className,children}=props
  return (
    <div className={`w-7 h-7 ${className} relative rounded-full  border-2`}>{children}</div>
  );
}
