import React, { useRef } from "react";
import DropdownInput from "../components/input/DropDownInput";
import DecimalInput from "../components/input/DecimalInput";
import {
  DecimalInputHandler,
  DropDownInputHandler,
} from "../components/input/input";
import { useDispatch } from "react-redux";
export default function TestInput() {
  const dispatch = useDispatch();
  const input1 = new DropDownInputHandler(
    0,
    ["Apple", "Banana", "Cherry", "Grapes", "Orange"],
    null,
    0,
    "fruit:"
  );
  const input2 = new DecimalInputHandler(
    1,
    [0.0, 8.0],
    /^\d$/,
    1,
    "ECV",
    undefined,
    3,
    2,
    dispatch
  );
  const input3 = new DecimalInputHandler(
    2,
    [0.0, 3.0],
    /^\d$/,
    2,
    "MEP",
    undefined,
    4,
    0,
    dispatch
  );
  const allInput = [input2, input3];
  return (
    <form className="flex flex-col gap-4 p-4">
      <DropdownInput {...input1} />
      {allInput.map((ele, i) => (
        <DecimalInput key={i} {...ele} />
      ))}
    </form>
  );
}
