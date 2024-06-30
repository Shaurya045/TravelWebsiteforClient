import React from "react";
import { homeImages } from "../assets/assets";
import Button from "./Button";

function Header() {
  return (
    <div>
      <div className="relative w-full h-[700px] overflow-hidden">
        <img src={homeImages.home} alt="" />
        <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] text-white">
          <h2 className="text-[60px] font-[500]">Plan your next trip today</h2>
          <p className="text-[25px]">
            madhovari is your new travel companion, we'll help you select the
            best destinations to travel and be with you throughout your trip.
          </p>
          <Button value="BOOK NOW"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
