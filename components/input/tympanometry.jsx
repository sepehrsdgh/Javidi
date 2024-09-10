import React from "react";
import DecimalInput from "./DecimalInput";
import { allInputs } from "../../utils/inputData";
import { IoCloseOutline } from "react-icons/io5";
import DropdownInput from "./DropDownInput";

const getValueForEaciInput = () => {
  const left = [];
  const right = [];
  for (let i = 0; i < allInputs.length; i++) {
    const input = allInputs[i];
    input.inputIdMaker();
    input.formatValue();
    if (i < 5) {
      left.push(input.finalValue);
    } else {
      right.push(input.finalValue);
    }
  }
  console.log({ left, right });
};

function Tympanometry({ toggleModal }) {
  const submitHandler = (e) => {
    e.preventDefault();
    getValueForEaciInput();
  };
  return (
    <form
      onSubmit={submitHandler}
      className="relative flex items-center flex-col bg-[#e8e9ee] p-16 rounded-sm"
    >
      <div
        onClick={toggleModal}
        className="absolute cursor-pointer right-3 top-3"
      >
        <IoCloseOutline size={36} />
      </div>
      <div className="flex items-stretch gap-4">
        <div className="flex relative flex-col w-full gap-4 bg-white p-8 shadow-md rounded-sm min-w-96">
          <div className="absolute -top-8 left-1/2 text-lg font-bold">L</div>
          <DropdownInput {...{ ...allInputs[0] }} />
          {allInputs.slice(1, 5).map((ele, i) => (
            <DecimalInput key={i} {...ele} />
          ))}
        </div>
        <div className="flex flex-col relative w-full gap-4 bg-white p-8 shadow-md rounded-sm min-w-96">
          <div className="absolute -top-8 left-1/2 text-lg font-bold">R</div>
          <DropdownInput {...{ ...allInputs[5] }} />
          {allInputs.slice(6, 10).map((ele, i) => (
            <DecimalInput key={i} {...ele} />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="mt-12 bg-blue-500 text-white py-2 px-8 font-iranMedium text-lg rounded"
      >
        ثبت
      </button>
    </form>
  );
}

export default Tympanometry;
