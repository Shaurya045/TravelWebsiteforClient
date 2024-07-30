import React, { useEffect } from "react";
import { icons } from "../assets/assets";
import { Link } from "react-router-dom";

function Itinerary({ id, itinaray, name }) {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".itinaray-container");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check to animate elements already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white pb-[50px] flex flex-col items-center px-[120px] mb-[50px]">
      <div className="flex flex-col mb-[120px] items-center">
        <h2 className="text-[50px] font-[400] mt-[50px] mb-[80px]">
          Itinerary
        </h2>
        <div className="timeline relative w-full m-auto after:content-['*'] after:absolute after:w-[6px] after:h-[105%] after:bg-[#000] after:top-0 after:left-[50%] after:ml-[-3px] after:z-0 after:rounded-[10px]">
          {itinaray.map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "left-[-250px]" : "left-[62%]"
              } itinaray-container p-[10px_50px] relative w-[50%]`}
            >
              <div
                className={`${
                  index % 2 === 0 ? "left-[400px]" : "left-[-97px]"
                } absolute right-[-20px] top-[32px] z-10`}
              >
                <div className="relative w-[100px] h-[100px] rounded-[50%] bg-gray-200 text-center">
                  <h2 className="absolute top-[35px] left-[26px] text-[22px] font-[400]">
                    Day {item.day}
                  </h2>
                </div>
              </div>
              <div className="p-[20px_30px] relative w-[300px] rounded-[15px] bg-gray-600 text-white">
                <h2 className="text-[20px] font-[500] mb-[10px]">
                  {item.title}
                </h2>
                <p className="text-[15px]">{item.desc}</p>
                <span
                  className={`${
                    index % 2 === 0
                      ? "border-l-[#000] border-l-[25px] right-[-25px]"
                      : "border-r-[#000] border-r-[25px] left-[-25px]"
                  } h-0 w-0 absolute top-[50px] z-1 border-t-transparent border-t-[25px] border-b-transparent border-b-[25px]`}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative w-full h-[300px] overflow-hidden bg-gray-300 rounded-[40px]"
        id="booknow"
      >
        <img
          className="absolute top-[-500px] w-full"
          src={icons.home2}
          alt=""
        />
        <div className="absolute flex flex-col items-center gap-[40px] top-[60px] left-[31%]">
          <h2 className="text-[50px] font-[500] text-white">BOOK NOW</h2>
          <div className="flex flex-row gap-[100px]">
            <a
              href={`https://wa.me/918210080108?text=Hello, I want more detail for ${name} tour package with id as ${id}.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-[200px] h-[60px] bg-green-500 text-center rounded-[20px] cursor-pointer hover:scale-[1.05] duration-[0.5s]">
                <h2 className="absolute text-[20px] left-[23%] top-[23%] text-white">
                  WhatsApp
                </h2>
              </div>
            </a>
            <Link to={"/contact"}>
              <div className="relative w-[200px] h-[60px] bg-red-500 text-center rounded-[20px] cursor-pointer hover:scale-[1.05] duration-[0.5s]">
                <h2 className="absolute text-[20px] left-[35%] top-[23%] text-white">
                  Email
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
