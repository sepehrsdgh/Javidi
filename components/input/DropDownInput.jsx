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
    <div
      ref={dropdownRef}
      className="relative flex items-center gap-2  w-64 p-4"
    >
      <label
        id={`input-${id}-${i}`}
        className="text-lg font-semibold cursor-pointer mb-2"
        onClick={toggleDropdown}
        tabIndex={tabIndex}
      >
        {label} :
      </label>
      <div
        id={`select-input-${id}-${i}`}
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedValue || `Select a ${label}`}
      </div>
      {isDropdownOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-2 z-10">
          {rangeValue.map((option, index) => (
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
      <div
        className={`input-${id}-error opacity-0 text-red-400 font-iranBlack transition-all duration-700`}
      ></div>
    </div>
  );
};

export default DropdownInput;
