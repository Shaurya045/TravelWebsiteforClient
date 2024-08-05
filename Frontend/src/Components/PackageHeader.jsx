import React from "react";
import { icons } from "../assets/assets";

function PackageHeader() {
  return (
    <div className="">
      <div
        className="relative w-full h-[450px] md:h-[700px] overflow-hidden"
        style={{
          backgroundImage: `url(${icons.chooseTour})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img src={icons.chooseTour} alt="" /> */}
        <div className="absolute w-full h-full flex items-center justify-center text-white">
          <h1 className="text-[35px] md:text-[80px] font-[500] font-['Merriweather']">
            Choose Your Tour
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PackageHeader;
