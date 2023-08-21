import React, { useState } from "react";
import Radio from "./Radio";

const RadioGroup = ({ options, onChange, value, label }) => {
  const [selectedIndex, setSelectedIndex] = useState(value);
  console.log("Selected radio", selectedIndex);
  const onSelect = (index) => {
    setSelectedIndex(index);
    onChange && onChange(index);
  };
  return (
    <div className="py-5 px-3 border-2 p-[1px] border-color7 rounded-[3px] relative flex items-center gap-4 ">
      <div className="bg-white absolute top-[-14px] left-3 p-0">
        <span className="text-sm font-medium text-color8 ">{label}</span>
      </div>
      {options.map((el, index) => (
        <Radio
          key={index}
          index={index}
          selectedIndex={selectedIndex}
          onSelect={(index) => onSelect(index)}
        >
          <div className="flex flex-1 justify-around text-sm font-medium ">
            {el}
          </div>
        </Radio>
      ))}
    </div>
  );
};

export default RadioGroup;
