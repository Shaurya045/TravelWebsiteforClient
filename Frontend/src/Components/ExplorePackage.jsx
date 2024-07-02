import React from "react";
import { package_list } from "../assets/assets";
import Button from "./Button";

function ExplorePackage() {
  let box = document.querySelector(".product-container");
  const btnPressNext = () => {
    let width = box.clientWidth;
    box.scrollLeft += width;
  };
  const btnPressPrev = () => {
    let width = box.clientWidth;
    box.scrollLeft -= width;
  };

  return (
    <div className="relative mt-[50px] mx-[5px] mb-[150px] max-w-[1500px]">
      <h2 className="text-[40px] ml-[6vw] mb-[30px] ">Choose Your Package</h2>

      <div className="relative overflow-hidden">
        <button
          onClick={btnPressPrev}
          className="border-none w-[100px] h-full absolute top-0 flex justify-center items-center"
        >
          <span className="text-[50px] text-black ">&lt;</span>
        </button>
        <button
          onClick={btnPressNext}
          className="border-none w-[100px] h-full absolute top-0 flex justify-center items-center right-0"
        >
          <span className="text-[50px] text-black ">&gt;</span>
        </button>
        <div className="product-container flex justify-between items-center gap-7 text-center mx-[100px] my-[20px] overflow-x-hidden">
          {package_list.map((item, index) => {
            return (
              <div key={index} className="relative text-white rounded-[30px] ">
                <div className="relative h-[450px] w-[300px] rounded-[30px] ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover rounded-[30px] "
                  />
                </div>
                <div className="absolute top-[350px] left-[35px]">
                  <h2 className="text-[45px]">{item.name}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute left-[45%] bottom-[-80px] ">
        <Button value="SEE ALL" />
      </div>
    </div>
  );
}

export default ExplorePackage;
