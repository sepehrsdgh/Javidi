import { forwardRef, useState } from "react";
import { useSelector } from "react-redux";

const DecimalInput = (props) => {
  const {
    id,
    inputCount,
    tabIndex,
    decimalCount,
    handleInputChange,
    handleKeyDown,
    type,
    maxLength,
    label,
  } = props;
  const [inputs, setInputs] = useState(Array(inputCount).fill(""));

  const renderInputFields = () => {
    const inputFields = [];
    const decimalPosition = inputCount - decimalCount;

    for (let i = 0; i < inputCount; i++) {
      if (decimalCount > 0 && i === decimalPosition) {
        inputFields.push(
          <span key={`decimal-${i}`} className="mx-1">
            .
          </span>
        );
      }

      const format = i >= decimalPosition ? "decimal" : "";

      inputFields.push(
        <input
          tabIndex={tabIndex}
          key={`input-${i}`}
          id={`input-${id}-${i}`}
          type={type}
          maxLength={maxLength}
          autoComplete="off"
          value={inputs[i]}
          data-format={format}
          onChange={(e) => handleInputChange(e, i, inputs, setInputs)}
          onKeyDown={(e) => handleKeyDown(e, i, inputs, setInputs)}
          className="w-10 p-2 border border-gray-300 bg-gray-100 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      );
    }
    return inputFields;
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="text-md font-semibold">{label}</label>
      <div className="flex items-baseline space-x-2">{renderInputFields()}</div>
      <div
        className={`input-${id}-error opacity-0 text-red-400 text-sm font-iranRegular transition-all duration-500`}
      ></div>
    </div>
  );
};

export default DecimalInput;
