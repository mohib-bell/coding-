import React from "react";

const Input = ({ label, type, name, placeholder, onChange, value }) => {
  return (
    <div className="w-full border-2 p-[1px] border-color7 rounded-[3px] relative">
      <div className="bg-white absolute top-[-14px] left-3 p-0">
        <span className="text-sm font-medium text-color8 ">{label}</span>
      </div>

      <input
        className="w-full py-5 px-4 text-sm caret-mantis outline-none placeholder-[#BFD8EB] text-color1"
        autoComplete="off"
        type={type}
        name={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
