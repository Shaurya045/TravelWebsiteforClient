import React from "react";
import { icons } from "../assets/assets";

function Testimonial() {
  return (
    <div className="bg-[#66666620] pt-[80px] pb-[150px] w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-[80px]">
        <p className="text-[40px] font-[600] font-['Merriweather'] max-[900px]:text-[30px] ">Why Choose Us?</p>
        <div className="flex flex-col max-[900px]:gap-[80px] min-[900px]:flex-row items-center justify-between text-[20px] max-[900px]:text-[18px]  font-[500] w-[80%]">
          <div className="flex flex-col items-center w-[180px] gap-[20px]">
            <div className="bg-[#D9D9D9] w-[120px] h-[120px] rounded-[100%] flex items-center justify-center">
              <img src={icons.expertIcon} alt="" />
            </div>
            <p className="text-center font-['Merriweather'] ">Expertly Curated Packages</p>
          </div>
          <div className="flex flex-col items-center w-[180px] gap-[20px]">
            <div className="bg-[#D9D9D9] w-[120px] h-[120px] rounded-[100%] flex items-center justify-center">
              <img src={icons.holidayIcon} alt="" />
            </div>
            <p className="text-center font-['Merriweather']">Personalized Itineraries</p>
          </div>
          <div className="flex flex-col items-center w-[180px] gap-[20px]">
            <div className="bg-[#D9D9D9] w-[120px] h-[120px] rounded-[100%] flex items-center justify-center">
              <img src={icons.headsetIcon} alt="" />
            </div>
            <p className="text-center font-['Merriweather']">Exceptional Customer Support</p>
          </div>
          <div className="flex flex-col items-center w-[180px] gap-[20px]">
            <div className="bg-[#D9D9D9] w-[120px] h-[120px] rounded-[100%] flex items-center justify-center">
              <img src={icons.moneyBagIcon} alt="" />
            </div>
            <p className="text-center font-['Merriweather']">Best Price Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
