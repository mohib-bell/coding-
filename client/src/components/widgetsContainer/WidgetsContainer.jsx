import React from "react";
import Button from "../button/Button";

const WidgetsContainer = ({ children, Title, styles, button, label }) => {
  return (
    <div className="mb-12">
      <div className="border-2 border-color1 relative mt-3 mb-14">
        <div className="flex absolute top-[-12px] ml-[26px] w-full justify-between pr-14">
          <div className="bg-white  px-2 flex items-center">
            <span className=" text-[17px] text-color1 font-semibold ">
              {Title}
            </span>
          </div>
          {button ? (
            <Button label={`${label}`} variant="pill">
              <img src="/assets/practice/add.svg" alt="arrow-icon" />
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={`${styles}`}>{children}</div>
    </div>
  );
};

export default WidgetsContainer;
