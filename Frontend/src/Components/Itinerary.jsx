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
    <div className="bg-white pb-[50px] flex flex-col items-center mb-[0px]">
      <div className="flex flex-col mb-[120px] items-center">
        <h2 className="text-[48px] font-[400] font-['Merriweather'] mt-[50px] mb-[80px]">
          Itinerary
        </h2>
        <div className="timeline relative w-full m-auto max-[810px]:m-[50px_auto] max-[810px]:after:left-[40px] after:content-[''] after:absolute after:w-[3px] after:h-[100%] after:bg-[#000] after:top-0 after:left-[50%] after:ml-[-3px] after:z-0 after:rounded-[10px]">
          {itinaray.map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "left-[-250px] " : "left-[62%] "
              } itinaray-container p-[10px_50px] relative w-[50%] max-[810px]:left-[30px] `}
            >
              <div
                className={`${
                  index % 2 === 0 ? "left-[400px]" : "left-[-97px]"
                } absolute right-[-20px] top-[32px] z-10 max-[810px]:left-[-23px]`}
              >
                <div className="relative w-[100px] max-[810px]:w-[60px] h-[100px] max-[810px]:h-[60px] rounded-[50%] bg-[#D9D9D9] text-center">
                  <h2 className="absolute top-[34%] max-[810px]:top-[30%] left-[21%] max-[810px]:left-[20%] text-[22px] max-[810px]:text-[16px] text-[#333333] font-[400] font-['Merriweather'] ">
                    Day {item.day}
                  </h2>
                </div>
              </div>
              <div className="p-[20px_30px] flex flex-col relative w-[300px] max-[810px]:w-[250px] rounded-[15px]">
                <h2 className="text-[20px] max-[810px]:text-[18px] text-black font-[400] font-['Lato'] mb-[10px]">
                  {item.title}
                </h2>
                <p className="text-[15px] max-[810px]:text-[14px] text-[#666666] font-['Lato']">
                  {item.desc}
                </p>
                <span
                  className={`${
                    index % 2 === 0
                      ? "border-l-[#00000050] border-l-[25px] right-[-25px] max-[810px]:border-l-[0px]"
                      : "border-r-[#00000050] border-r-[25px] left-[-25px] "
                  } h-0 w-0 absolute top-[50px] max-[810px]:top-[42px] z-1 border-t-transparent border-t-[25px] max-[810px]:border-t-[12px] border-b-transparent border-b-[25px] max-[810px]:border-b-[12px] max-[810px]:border-r-[#00000050]  max-[810px]:border-r-[12px] max-[810px]:left-[0px]`}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full px-[50px] max-[680px]:px-[30px] ">
        <div
          className="relative w-full h-[400px] overflow-hidden bg-gray-300 rounded-[40px] max-[600px]:rounded-[20px] max-[550px]:h-[350px] "
          style={{
            backgroundImage: `url(${icons.home2})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="absolute w-full h-full flex flex-col items-center justify-center gap-[40px] max-[600px]:gap-[30px]">
            <h2 className="text-[58px] max-[600px]:text-[40px] font-[900] font-['Lato'] text-white">
              BOOK NOW
            </h2>
            <div className="flex flex-row max-[600px]:flex-col gap-[100px] max-[600px]:gap-[20px]">
              <a
                href={`https://wa.me/918210080108?text=Hello, I want more detail for ${name} tour package with id as ${id}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-row gap-[20px] items-center justify-center w-[200px] max-[600px]:w-[180px] h-[60px] max-[600px]:h-[50px] bg-[#54CF61] text-center rounded-[20px] cursor-pointer hover:scale-[1.05] duration-[0.5s]">
                  <img className="w-[30px] max-[600px]:w-[23px]" src={icons.whatsapp} alt="" />
                  <h2 className="text-[20px] max-[600px]:text-[18px] font-['Lato'] left-[23%] top-[23%] text-white">
                    WhatsApp
                  </h2>
                </div>
              </a>
              <Link to={"/contact"}>
                <div className="flex flex-row gap-[20px] items-center justify-center w-[200px] max-[600px]:w-[180px] h-[60px] max-[600px]:h-[50px] bg-[#EA4335] text-center rounded-[20px] cursor-pointer hover:scale-[1.05] duration-[0.5s]">
                  <img className="w-[30px] max-[600px]:w-[23px]" src={icons.email} alt="" />
                  <h2 className=" text-[20px] max-[600px]:text-[18px] font-['Lato'] left-[35%] top-[23%] text-white">
                    Email
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
