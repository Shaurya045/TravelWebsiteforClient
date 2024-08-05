import React from "react";
import { useParams } from "react-router-dom";
import { package_list } from "../assets/assets";
import Itinerary from "../Components/Itinerary";

function PackageItem() {
  const { id } = useParams();
  return (
    <div className="bg-[#33333360]">
      <div>
        {package_list.map((item, index) => {
          if (item._id === id) {
            return (
              <div>
                <div
                  key={index}
                  className="flex flex-row max-[900px]:flex-col gap-[40px] items-center max-[900px]:items-start justify-center pt-[170px] pb-[90px] px-[130px] max-[900px]:px-[30px]"
                >
                  <div className="w-[30%] max-[900px]:w-full h-[470px] max-[900px]:h-[350px]">
                    <img
                      className="w-full h-full object-cover rounded-[20px]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] w-[60%] max-[900px]:w-full">
                    <p className="text-[20px] text-[#666666] font-['Lato']">{item.description}</p>
                    <h2 className="text-white text-[50px] font-[500] font-['Merriweather']">
                      {item.name}
                    </h2>
                    <p className="text-[20px] text-[#666666] font-['Lato']">{item.longDescription}</p>
                    <p className="text-[20px] font-['Lato'] ">{item.day}</p>
                    {/* <p className="text-[20px]">${item.price}</p> */}
                    <a href="#booknow">
                      <button className="w-[180px] h-[50px] bg-[#003366] text-white font-['Lato'] rounded-[25px] duration-[0.5s] hover:scale-[1.05]">
                        BOOK NOW
                      </button>
                    </a>
                  </div>
                </div>
                <Itinerary key={index} id={item._id} itinaray={item.itinerary} name={item.name} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default PackageItem;
