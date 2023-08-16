import React from "react";

const Radio = (props) => {
  const isSelected = props.index === props.selectedIndex;
  return (
    <div
      className={`flex items-center gap-2  cursor-pointer text-xs font-bold  `}
      onClick={() => props.onSelect(props.index)}
    >
      <div
        className={`rounded-full w-6 h-6 border border-[#00EBBA] flex items-center justify-center  `}
      >
        <div
          className={`w-3 h-3 bg-[#00EBBA] rounded-full transition opacity-0  ${
            isSelected && "opacity-100"
          }`}
        ></div>
      </div>
      {props.children}
    </div>
  );
};

export default Radio;
