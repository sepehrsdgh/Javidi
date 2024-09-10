import React, { forwardRef, useEffect, useRef, useState } from "react";

const DropdownInput = (props) => {
  const {
    onComplete,
    afterSelect,
    id,
    i = 0,
    tabIndex,
    rangeValue,
    label,
  } = props;
  const [selectedValue, setSelectedValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsDropdownOpen(false);
    afterSelect();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex flex-col gap-2">
      <label
        id={`input-${id}-${i}`}
        className="text-md font-semibold cursor-pointer"
        onClick={toggleDropdown}
        tabIndex={tabIndex}
      >
        {label}
      </label>
      <div
        id={`select-input-${id}-${i}`}
        data-value={selectedValue}
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-pointer"
        onClick={toggleDropdown}
      >
        {(selectedValue &&
          rangeValue.find((ele) => ele.value == selectedValue).htmlTag) ||
          `Select a ${label}`}
      </div>
      {isDropdownOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-2 z-10">
          {rangeValue.map((option, index) => (
            <li
              key={index}
              value={option.value}
              className="p-2 hover:bg-gray-200 cursor-pointer transition-colors ease-in-out duration-300"
              onClick={() => handleSelect(option.value)}
            >
              {option.htmlTag}
            </li>
          ))}
        </ul>
      )}
      <div
        className={`input-${id}-error opacity-0 text-red-400 text-sm font-iranRegular transition-all duration-50`}
      ></div>
    </div>
  );
};

export default DropdownInput;
