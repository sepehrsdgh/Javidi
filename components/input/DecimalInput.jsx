import React, { forwardRef, useState } from "react";

const DecimalInput = forwardRef((props, ref) => {
  // State to store individual input values
  const [inputs, setInputs] = useState(["", "", "", "", ""]);

  // Function to handle input changes
  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Allow only one digit or a decimal point in each input
    if ((/^\d$/.test(value) || value === ".") && value.length === 1) {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);

      // Automatically move to the next input field
      if (value !== "." && index < 4) {
        document.getElementById(`input-${props.id}-${index + 1}`).focus();
      }
      if (value !== "." && index == 4) {
        props.onComplete();
      }
    }
  };

  // Function to handle keyboard navigation (Backspace, Delete, Arrow keys)
  const handleKeyDown = (e, index) => {
    const newInputs = [...inputs];

    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default Enter key behavior
      props.onComplete();
    }

    if (e.key === "Backspace" || e.key === "Delete") {
      // Clear the current input
      newInputs[index] = "";
      setInputs(newInputs);

      // Move to the previous input on Backspace or stay on Delete
      if (e.key === "Backspace" && index > 0) {
        document.getElementById(`input-${props.id}-${index - 1}`).focus();
      } else if (e.key === "Delete" && index < 4) {
        //document.getElementById(`input-${index + 1}`).focus();
      } else if (index == 0) {
        console.log("asghar");
        props.onComeBack();
      }
    }

    // Move left or right with arrow keys
    if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`input-${props.id}-${index - 1}`).focus();
    } else if (e.key === "ArrowRight" && index < 4) {
      document.getElementById(`input-${props.id}-${index + 1}`).focus();
    }
  };

  return (
    <div className="flex items-center space-x-2 p-4">
      {/* Label */}
      <label className="text-lg font-semibold">ECV:</label>

      {/* 5 Inputs for the ECV (e.g., "2", ".", "2", "5") */}
      {inputs.map((value, index) => (
        <input
          tabIndex={props.tabIndex}
          key={index}
          id={`input-${props.id}-${index}`}
          ref={index === 0 ? ref : null} //
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 p-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
});

export default DecimalInput;
