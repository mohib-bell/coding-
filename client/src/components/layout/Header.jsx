import React from "react";

const Header = () => {
  return (
    <header className="h-[72px] border-b-2 border-color7 bg-white flex items-center sticky top-0 z-10 ">
      <nav className="w-full px-[25px] flex items-center justify-between">
        <div className="flex items-center gap-3 ">
          <span className="text-color8 text-2xl font-medium">CSD</span>
          <div className="w-[2px] h-[31px] bg-color4"></div>
          <span className="text-color8 text-sm">
            Coding Software Development
          </span>
        </div>
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-3">
            <h5 className="text-sm text-color8">
              Welcome, <span className="text-color4">John smith</span>{" "}
            </h5>
            <img
              className="cursor-pointer"
              src="
          /assets/downarrow.svg"
              alt="down-arrow"
            />
          </div>

          <div className="flex items-center gap-7">
            <img
              className="cursor-pointer"
              src="/assets/notification.svg"
              alt="notification"
            />
            <img
              className="cursor-pointer"
              src="/assets/logout.svg"
              alt="logout"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
