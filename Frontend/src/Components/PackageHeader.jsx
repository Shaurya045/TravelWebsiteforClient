import React from "react";
import { icons } from "../assets/assets";

function PackageHeader() {
  return (
    <div className="relative">
      <div className="relative w-full h-[700px] overflow-hidden">
        <img src={icons.chooseTour} alt="" />
        <div className="absolute bottom-[30%] left-[30vw] text-white">
          <h1 className="text-[80px] font-[500]">Choose Your Tour</h1>
        </div>
      </div>
    </div>
  );
}

export default PackageHeader;
