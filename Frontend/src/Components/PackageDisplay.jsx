import React from "react";
import { icons } from "../assets/assets";

function PackageDisplay({ category, setCategory }) {
  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="mx-[100px] absolute top-[660px] left-[30px]">
      <div className="flex gap-[30px] bg-[#F0F0F0] w-[1000px] h-[80px] rounded-[30px] mx-[120px] p-[30px] items-center">
        <img className="w-[30px] h-[30px]" src={icons.search_icon} alt="" />
        <input
          value={category}
          onChange={handleInputChange}
          className="p-[10px] bg-transparent border-none outline-none w-[75%] text-[22px] text-black font-['Lato']"
          type="text"
          placeholder="Search your next vacation"
        />
        <button className="text-[22px] text-white font-['Lato'] bg-[#D4AF37] w-[150px] h-[45px] rounded-[30px] duration-[0.5s] hover:scale-[1.05] ">
          Filter
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default PackageDisplay;
