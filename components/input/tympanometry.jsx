import React from "react";
import DecimalInput from "./DecimalInput";
import { allInputs } from "../../utils/inputData";
import { IoCloseOutline } from "react-icons/io5";
import DropdownInput from "./DropDownInput";

const getValueForEaciInput = () => {
  const values = [];
  for (let i = 0; i < allInputs.length; i++) {
    const input = allInputs[i];
    input.inputIdMaker();
    input.formatValue();
    values.push(input.finalValue);
  }
};

function Tympanometry({toggleModal}) {
  const submitHandler = (e) => {
    e.preventDefault();
    getValueForEaciInput();
  };
  return (
    <form
      onSubmit={submitHandler}
      className="relative flex items-center flex-col bg-[#e8e9ee] p-16 rounded-sm"
    >
      <div onClick={toggleModal} className="absolute cursor-pointer right-3 top-3">
        <IoCloseOutline size={36} />
      </div>
      <div className="flex items-stretch gap-4">
        <div className="flex flex-col w-full gap-4 bg-white p-8 shadow-md rounded-sm min-w-96">
          <DropdownInput {...{ ...allInputs[0] }} />
          {allInputs.slice(1, 5).map((ele, i) => (
            <DecimalInput key={i} {...ele} />
          ))}
        </div>
        <div className="flex flex-col w-full gap-4 bg-white p-8 shadow-md rounded-sm min-w-96">
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
