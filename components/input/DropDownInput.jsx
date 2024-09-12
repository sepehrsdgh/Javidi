import React, { forwardRef, useEffect, useRef, useState } from "react";
import { keyBoardEnum } from "./input";

const DropdownInput = (props) => {
  const { afterSelect, id, tabIndex, rangeValue, label } = props;
  const [selectedValue, setSelectedValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(id == 0 ? true : false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsDropdownOpen(false);
    setFocusedIndex(0);
    afterSelect();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setFocusedIndex(0);
    }
  };

  const dropdownRef = useRef(null);

  const handleKeyDown = (e) => {
    if (!isDropdownOpen) return;
    switch (e.key) {
      case keyBoardEnum.ArrowDown:
        setFocusedIndex((prevIndex) =>
          prevIndex < rangeValue.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case keyBoardEnum.ArrowUp:
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : rangeValue.length - 1
        );
        break;
      case keyBoardEnum.Enter:
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < rangeValue.length) {
          handleSelect(rangeValue[focusedIndex].value);
        }
        break;
      case keyBoardEnum.Escape:
        setIsDropdownOpen(false);
        setFocusedIndex(0);
        e.stopPropagation();
        break;
      case keyBoardEnum.Tab:
        setIsDropdownOpen(false);
        break;
      default:
        break;
    }
  };

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

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen, focusedIndex]);

  return (
    <div ref={dropdownRef} className="relative  flex flex-col gap-2">
      <label
        onFocus={() => setIsDropdownOpen(true)}
        id={`input-${id}-0`}
        className="text-md focus:outline-none font-semibold cursor-pointer"
        onClick={toggleDropdown}
        tabIndex={tabIndex}
      >
        {label}
      </label>
      <div
        id={`select-input-${id}`}
        data-value={selectedValue}
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-pointer"
        onClick={toggleDropdown}
      >
        {(selectedValue &&
          rangeValue.find((ele) => ele.value == selectedValue).htmlTag) ||
          `Select a ${label}`}
      </div>
      {isDropdownOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-8 z-10">
          {rangeValue.map((option, index) => (
            <li
              key={index}
              value={option.value}
              className={`p-2 hover:bg-gray-200 cursor-pointer transition-colors ease-in-out duration-300 ${
                focusedIndex === index || (focusedIndex == -1 && index == 0)
                  ? "bg-gray-200"
                  : ""
              }`}
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
