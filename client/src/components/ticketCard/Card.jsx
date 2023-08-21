import React from "react";

const Card = ({ path, status, numoftickets }) => {
  return (
    <div className="max-w-[146px] w-full rounded-round bg-[#E5FFFA] relative h-[157px] flex items-center justify-center shadow-card-shadow ">
      <img
        src={path}
        alt="card-icon"
        className="absolute top-[-15%]"
      />
      <div className="flex flex-col items-center justify-between mt-4 ">
        <span className="text-[32px] text-color8 ">{numoftickets}</span>
        <span className="text-[17px] text-color1">{status}</span>
        <span className="text-[11px] text-color1 tracking-[3.3px]">
          TICKETS
        </span>
      </div>
    </div>
  );
};

export default Card;
