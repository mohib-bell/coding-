import React, { useState } from "react";

const Checkbox = ({ label, name, value, selectedValue, onChange }) => {
  const isChecked = selectedValue === value;

  const toggleCheckbox = () => {
    if (!isChecked) {
      onChange(value);
    }
  };
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        className="hidden"
      />
      <span
        className={`w-5 h-5 border-2  flex items-center justify-center transition-colors ${
          isChecked ? " border-color1" : "border-color7"
        }`}
      >
        {isChecked && <div className="w-3 h-3 bg-color1"></div>}
      </span>
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
