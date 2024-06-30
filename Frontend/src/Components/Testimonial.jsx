import React from "react";

function Testimonial() {
  return (
    <div className="bg-gray-200 pt-[50px] pb-[180px]">
      <div className="flex flex-col items-center gap-[80px]">
        <p className="text-[40px] font-[600]">Why Choose Us?</p>
        <div className="flex flex-row gap-[100px] text-[20px] font-[500]">
          <div className="flex flex-col items-center w-[180px] gap-[20px]">
            <div className="bg-gray-400 w-[120px] h-[120px] rounded-[100%]">
              <img src="" alt="" />
            </div>
            <p className="text-center">Expertly Curated Packages</p>
          </div>
          <div className="flex flex-col items-center w-[180px] gap-[20px]">
            <div className="bg-gray-400 w-[120px] h-[120px] rounded-[100%]">
              <img src="" alt="" />
            </div>
            <p className="text-center">Personalized Itineraries</p>
          </div>
          <div className="flex flex-col items-center w-[180px] gap-[20px]">
            <div className="bg-gray-400 w-[120px] h-[120px] rounded-[100%]">
              <img src="" alt="" />
            </div>
            <p className="text-center">Exceptional Customer Support</p>
          </div>
          <div className="flex flex-col items-center w-[180px] gap-[20px]">
            <div className="bg-gray-400 w-[120px] h-[120px] rounded-[100%]">
              <img src="" alt="" />
            </div>
            <p className="text-center">Best Price Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
