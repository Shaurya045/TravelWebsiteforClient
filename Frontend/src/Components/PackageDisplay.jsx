import React from "react";
import { icons } from "../assets/assets";

function PackageDisplay({ category, setCategory }) {
  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="w-[80%] absolute top-[420px] left-[10%] md:top-[660px] overflow-hidden">
      <div className="flex gap-[30px] bg-[#F0F0F0] w-full h-[80px] rounded-[30px] p-[30px] items-center justify-center max-[755px]:gap-[10px] max-[755px]:h-[60px] max-[755px]:p-[15px]">
        <img className="w-[30px] h-[30px] max-[755px]:w-[18px] max-[755px]:h-[18px]" src={icons.search_icon} alt="" />
        <input
          value={category}
          onChange={handleInputChange}
          className="p-[10px] bg-transparent border-none outline-none w-[80%] text-[22px] text-black font-['Lato'] max-[755px]:text-[15px] max-[755px]:p-[5px]"
          type="text"
          placeholder="Search your next vacation"
        />
        <button className="text-[22px] text-white font-['Lato'] bg-[#D4AF37] w-[150px] h-[45px] rounded-[30px] duration-[0.5s] hover:scale-[1.05] max-[755px]:text-[15px] max-[755px]:w-[66px] max-[755px]:h-[30px] ">
          Filter
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default PackageDisplay;
