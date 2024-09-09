import React from "react";
import DropdownInput from "../components/input/DropDownInput";
import DecimalInput from "../components/input/DecimalInput";
import { allInputs } from "../utils/inputData";

const getValueForEaciInput = () => {
  const values = [];
  for (let i = 1; i < allInputs.length; i++) {
    const input = allInputs[i];
    input.inputIdMaker();
    input.formatValue();
    values.push(input.finalValue);
  }
  console.log(values);
};

export default function TestInput() {
  const submitHandler = (e) => {
    e.preventDefault();
    getValueForEaciInput();
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4 p-4">
      <DropdownInput {...{ ...allInputs[0] }} />
      {allInputs.slice(1, 5).map((ele, i) => (
        <DecimalInput key={i} {...ele} />
      ))}
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
