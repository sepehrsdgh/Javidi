import { forwardRef, useState } from "react";

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
          value={inputs[i]}
          data-format={format}
          onChange={(e) => handleInputChange(e, i, inputs, setInputs)}
          onKeyDown={(e) => handleKeyDown(e, i, inputs, setInputs)}
          className="w-10 p-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      );
    }
    return inputFields;
  };

  return (
    <div className="flex items-center space-x-2 p-4">
      <label className="text-lg font-semibold">{label}:</label>
      {renderInputFields()}
    </div>
  );
};

export default DecimalInput;
