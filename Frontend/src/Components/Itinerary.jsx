import React from "react";
import { homeImages } from "../assets/assets";

function Itinerary({ id, itinaray }) {
  return (
    <div className="bg-white pb-[50px] flex flex-col items-center px-[120px] mb-[50px]">
      <div className="flex flex-col mb-[120px] items-center">
        <h2 className="text-[50px] font-[400] mt-[50px] mb-[80px]">
          Itinerary
        </h2>
        <div className="flex flex-col gap-[150px] items-center">
          {itinaray.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center justify-center gap-[150px]"
                >
                  <div className="relative w-[130px] h-[130px] rounded-[50%] bg-gray-200 text-center">
                    <h2 className="absolute top-[45px] left-[36px] text-[25px] font-[400] ">
                      Day {item.day}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-[10px] w-[300px]">
                    <h2 className="text-[20px] font-[500]">{item.title}</h2>
                    <p className="text-[16px] text-gray-500">{item.desc}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center justify-center gap-[150px]"
                >
                  <div className="flex flex-col gap-[10px] w-[300px]">
                    <h2 className="text-[20px] font-[500]">{item.title}</h2>
                    <p className="text-[16px] text-gray-500">{item.desc}</p>
                  </div>
                  <div className="relative w-[130px] h-[130px] rounded-[50%] bg-gray-200 text-center">
                    <h2 className="absolute top-[45px] left-[36px] text-[25px] font-[400] ">
                      Day {item.day}
                    </h2>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div
        className="relative w-full h-[300px] overflow-hidden bg-gray-300 rounded-[40px] "
        id="booknow"
      >
        <img
          className="absolute top-[-500px] w-full"
          src={homeImages.home2}
          alt=""
        />
        <div className="absolute flex flex-col items-center gap-[40px] top-[60px] left-[31%]">
          <h2 className="text-[50px] font-[500] text-white">BOOK NOW</h2>
          <div className="flex flex-row gap-[100px]">
            <div className="relative w-[200px] h-[60px] bg-green-500 text-center rounded-[20px]">
              <h2 className="absolute text-[20px] left-[23%] top-[23%]">
                WhatsApp
              </h2>
            </div>
            <div className="relative w-[200px] h-[60px] bg-red-500 text-center rounded-[20px]">
              <h2 className="absolute text-[20px] left-[35%] top-[23%] text-white">
                Email
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
