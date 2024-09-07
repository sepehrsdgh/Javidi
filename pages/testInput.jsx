import React, { useRef } from "react";
import DecimalInput from "../components/input/DecimalInput";
import DropdownInput from "../components/input/DropDownInput";
export default function TestInput() {
  const arr = [useRef(), useRef(), useRef()];
  const handleComplete = (currentIndex) => {
    if (arr[currentIndex + 1]) {
      arr[currentIndex + 1].current.focus();
    }
  };

  const handleComeBack = (currentIndex) => {
    if (arr[currentIndex - 1]) {
      arr[currentIndex - 1].current.focus();
    }
  };
  //must add default value
  return (
    <form className="flex flex-col gap-4 p-4">
      <DropdownInput ref={arr[0]} onComplete={() => handleComplete(0)} />
      <DecimalInput
        id={0}
        ref={arr[1]}
        onComplete={() => handleComplete(1)}
        onComeBack={() => handleComeBack(1)}
        tabIndex={1}
      />
      <DecimalInput
        id={1}
        ref={arr[2]}
        onComplete={() => handleComplete(2)}
        onComeBack={() => handleComeBack(2)}
        tabIndex={2}
      />
    </form>
  );
}
