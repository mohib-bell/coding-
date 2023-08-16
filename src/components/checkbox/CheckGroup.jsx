import React, { useState } from "react";
import Checkbox from "./Checkbox";

const CheckGroup = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  console.log("Selected check", selectedOption);

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className="w-full py-5 px-3 border-2 p-[1px] border-color7 rounded-[3px] relative flex items-center gap-4">
      <div className="bg-white absolute top-[-14px] left-3 p-0">
        <span className="text-sm font-medium text-color8 ">{title}</span>
      </div>
      {options.map((option, index) => (
        <Checkbox
          key={index}
          label={option.label}
          name={option.name}
          value={option.value}
          selectedValue={selectedOption}
          onChange={handleRadioChange}
        />
      ))}
    </div>
  );
};

export default CheckGroup;
