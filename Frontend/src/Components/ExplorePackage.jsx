import React from "react";
import { package_list } from "../assets/assets";

function ExplorePackage() {
  return (
    <div className="my-[50px]">
      <h2 className="text-[40px] ml-[6vw] ">Choose Your Package</h2>
      <div className="m-auto flex flex-col items-center gap-[30px]">
        <div className="mt-[20px] flex">
            {package_list.map((item, index) => {
              return (
                <div className="relative text-white rounded-[30px]">
                  <div className="relative h-[450px] w-[300px] rounded-[30px]">
                    <img src={item.image} alt="" className="w-full h-full object-cover rounded-[30px] " />
                  </div>
                  <div className="absolute top-[350px] left-[35px]">
                    <h2 className="text-[45px]">{item.name}</h2>
                  </div>
                </div>
              );
            })}
        </div>
        <button className="w-[150px] h-[60px] bg-blue-900 rounded-[25px] text-white text-[20px]">SEE ALL</button>
      </div>
    </div>
  );
}

export default ExplorePackage;
