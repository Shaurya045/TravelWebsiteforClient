import React from "react";
import { homeImages } from "../assets/assets";

function PackageDisplay({ category, setCategory }) {
  return (
    <div className="mx-[100px] absolute top-[660px] left-[30px]">
      <div className="flex gap-[30px] bg-gray-300 w-[1000px] h-[80px] rounded-[30px] mx-[120px] p-[30px] items-center">
        <img
          className="w-[30px] h-[30px]"
          src={homeImages.search_icon}
          alt=""
        />
        <input
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="p-[10px] bg-transparent border-none w-[75%] text-[22px] text-black"
          type="text"
          placeholder="Search your next vacation"
        />
        <button className="text-[22px] text-white bg-yellow-600 w-[150px] h-[45px] rounded-[30px]">
          Filter
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default PackageDisplay;
