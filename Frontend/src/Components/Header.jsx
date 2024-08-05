import React, { useEffect, useState } from "react";
import { homeImages } from "../assets/assets";
import Button from "./Button";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Header({ use, setUse }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev === homeImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? homeImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative flex w-full h-[700px] items-center justify-center">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="absolute w-[3rem] max-[640px]:w-[1.5rem] h-[3rem] max-[640px]:h-[1.5rem] max-[640px]:hidden text-white z-10 left-[1rem] hover:cursor-pointer drop-shadow-[1px_1px_10px_#555] "
        />
        {homeImages.map((item, index) => {
          return (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-[1.3s] ${
                slide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item}
                loading="lazy"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[90%] max-[640px]:max-w-[80%]  bottom-[10%] left-[6vw] text-white">
                <h2 className="text-[60px] max-[640px]:text-[40px] font-[500] font-['Merriweather']">
                  Plan your next trip today
                </h2>
                <p className="text-[25px] max-[640px]:text-[20px] font-['Lato']">
                  Madhovari is your new travel companion, we'll help you select
                  the best destinations to travel and be with you throughout
                  your trip.
                </p>
                <Button value="BOOK NOW" use={use} setUse={setUse} />
              </div>
            </div>
          );
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="absolute w-[3rem] max-[640px]:w-[1.5rem] h-[3rem] max-[640px]:h-[1.5rem] max-[640px]:hidden text-white z-10 right-[1rem] hover:cursor-pointer drop-shadow-[1px_1px_10px_#555] "
        />
      </div>
    </div>
  );
}

export default Header;
