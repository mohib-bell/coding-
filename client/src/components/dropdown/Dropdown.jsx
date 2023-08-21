import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ DropdownData }) => {
  return (
    <>
      {DropdownData.map((dropdown) => (
        <Link
          to={dropdown.route}
          key={dropdown.id}
          className=" transition-all ease-in-out duration-200 flex items-center p-6 gap-4 bg-color1 hover:bg-color4 border-b-2 border-menuborder"
        >
          <img src={dropdown.Imagepath} alt="coding-lib" />
          <span className="text-xs font-medium text-white">
            {dropdown.title}
          </span>
        </Link>
      ))}
    </>
  );
};

export default Dropdown;
