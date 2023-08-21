import React from "react";

const Button = ({ children, label, variant, onClick }) => {
  const varients = {
    primary: "",
    secondary: "",
    pill: "",
  };

  let buttonClasses = "text-white text-sm font-bold flex items-center  hover:opacity-90 shadow-button-shadow";

  if (variant === "primary") {
    buttonClasses +=
      " bg-color1  rounded max-w-[90px] w-full justify-between px-[11px] py-[9px] max-h-[35px] h-full";
  } else if (variant === "secondary") {
    buttonClasses +=
      " bg-color8 rounded max-w-[90px] w-full justify-between px-[11px] py-[9px] max-h-[35px] h-full";
  } else if (variant === "pill") {
    buttonClasses +=
      " flex-row-reverse justify-end gap-2  bg-color1 rounded-full  pl-0.5 pr-1.5 py-0.5";
  }
  return (
    <button className={buttonClasses} onClick={onClick}>
      {label}
      {children}
    </button>
  );
};

export default Button;
