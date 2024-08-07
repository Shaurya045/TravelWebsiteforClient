import React, { useRef, useState, useEffect } from "react";
import { package_list } from "../assets/assets";
import Button from "./Button";

function ExplorePackage() {
  const [scrollLeft, setScrollLeft] = useState(0);
  const boxRef = useRef(null);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const btnPressNext = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;
      setScrollLeft(boxRef.current.scrollLeft);
    }
  };

  const btnPressPrev = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;
      setScrollLeft(boxRef.current.scrollLeft);
    }
  };

  const handleTouchStart = (e) => {
    setIsTouching(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isTouching) return;
    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchStartX - touchEndX;
    boxRef.current.scrollLeft += touchDiff;
    setTouchStartX(touchEndX); // Update touchStartX to the current position
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  useEffect(() => {
    const boxElement = boxRef.current;

    if (boxElement) {
      boxElement.addEventListener("touchstart", handleTouchStart);
      boxElement.addEventListener("touchmove", handleTouchMove);
      boxElement.addEventListener("touchend", handleTouchEnd);

      return () => {
        boxElement.removeEventListener("touchstart", handleTouchStart);
        boxElement.removeEventListener("touchmove", handleTouchMove);
        boxElement.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, []);

  const uniquePackages = [];
  const packageNames = new Set();

  for (const item of package_list) {
    if (!packageNames.has(item.name)) {
      uniquePackages.push(item);
      packageNames.add(item.name);
    }
  }

  return (
    <div className="mt-[100px] mb-[150px] flex flex-col gap-[50px] w-full">
      <h2 className="text-[40px] max-[768px]:text-[30px] pl-[80px] max-[768px]:pl-[50px] font-['Merriweather']">
        Choose Your Package
      </h2>

      <div className="w-full h-[450px] max-[768px]:h-[400px] max-[768px]:px-[15px] flex flex-row items-center">
        <button
          onClick={btnPressPrev}
          className="border-none w-[100px] max-[768px]:hidden h-full flex justify-center items-center"
        >
          <span className="text-[50px] max-[768px]:text-[40px] text-black">
            &lt;
          </span>
        </button>
        <div
          ref={boxRef}
          className="product-container h-full w-full flex flex-row gap-[40px] max-[768px]:gap-[15px] items-center text-center overflow-x-scroll scrollbar-hide"
        >
          {uniquePackages.map((item, index) => (
            <div key={index} className="relative h-full text-white rounded-[30px]">
              <div className="h-full w-[305px] max-[768px]:w-[250px] rounded-[30px]">
                <img
                  src={item.image}
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover rounded-[30px]"
                />
              </div>
              <div className="absolute w-full bottom-[10%] mx-auto">
                <h2 className="text-[40px] max-[768px]:text-[33px] font-['Merriweather']">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={btnPressNext}
          className="border-none w-[100px] max-[768px]:hidden h-full flex justify-center items-center"
        >
          <span className="text-[50px] max-[768px]:text-[40px] text-black">
            &gt;
          </span>
        </button>
      </div>
      <div className="mx-auto">
        <Button value="SEE ALL" />
      </div>
    </div>
  );
}

export default ExplorePackage;
