import React from "react";
import { menu } from "../../constants/data";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-72px)] max-w-[84px] w-full flex flex-col bg-color1 sticky top-0 bottom-0">
      {menu.map((item) => (
        <Link
          to={item.route}
          key={item.id}
          className="max-h-[97px] group relative h-full flex flex-col gap-4 items-center justify-center cursor-pointer  hover:bg-color4 border-b-2 border-menuborder"
        >
          <img src={item.Imagepath} alt="dashboard-icon" />
          <span className="text-white text-xs font-bold uppercase text-center">
            {item.title}
          </span>

          {item.children ? (
            <div className="invisible group-hover:visible absolute left-full top-[-70px] w-[172px] z-[9999] ">
              <Dropdown DropdownData={item.children} />
            </div>
          ) : (
            ""
          )}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
