import React, { forwardRef, useState } from "react";

const DropdownInput = forwardRef(({ onComplete }, ref) => {
  // State to store the selected value and dropdown visibility
  const [selectedValue, setSelectedValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // List of dropdown options
  const options = ["Apple", "Banana", "Cherry", "Grapes", "Orange"];

  // Handle selection
  const handleSelect = (value) => {
    setSelectedValue(value); // Set the selected value
    setIsDropdownOpen(false); // Close the dropdown after selection
    onComplete();
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative flex  w-64 p-4">
      {/* Label that opens the dropdown */}
      <label
        className="text-lg font-semibold cursor-pointer mb-2"
        onClick={toggleDropdown}
      >
        Fruit:
      </label>

      {/* Input-like placeholder */}
      <div
        tabIndex={0}
        ref={ref} // Forward the ref to the container for focus handling
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedValue || "Select a fruit"}
      </div>

      {/* Custom Dropdown */}
      {isDropdownOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-2 z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default DropdownInput;
