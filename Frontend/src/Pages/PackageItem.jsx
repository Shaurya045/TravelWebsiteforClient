import React from "react";
import { useParams } from "react-router-dom";
import { package_list } from "../assets/assets";
import Itinerary from "../Components/Itinerary";

function PackageItem() {
  const { id } = useParams();
  return (
    <div className="bg-gray-400">
      <div>
        {package_list.map((item, index) => {
          if (item._id === id) {
            return (
              <div>
                <div
                  key={index}
                  className="flex flex-row gap-[40px] items-center justify-center pt-[170px] pb-[90px] px-[130px]"
                >
                  <div className="max-w-[25%]">
                    <img
                      className="w-full rounded-[20px]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] max-w-[60%]">
                    <p className="text-[20px]">{item.description}</p>
                    <h2 className="text-white text-[50px] font-[500]">
                      {item.name}
                    </h2>
                    <p className="text-[20px]">{item.longDescription}</p>
                    <p className="text-[20px]">{item.day}</p>
                    <p className="text-[20px]">${item.price}</p>
                    <a href="#booknow">
                      <button className="w-[180px] h-[50px] bg-blue-950 text-white rounded-[25px]">
                        BOOK NOW
                      </button>
                    </a>
                  </div>
                </div>
                <Itinerary key={index} id={item._id} itinaray={item.itinerary} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default PackageItem;
