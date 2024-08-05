import React from "react";
import Header from "../Components/Header";
import Testimonial from "../Components/Testimonial";
import About from "../Components/About";
import ExplorePackage from "../Components/ExplorePackage";
import { icons } from "../assets/assets";
import Button from "../Components/Button";

function Home({ use, setUse }) {
  return (
    <div className="w-full">
      <Header use={use} setUse={setUse} />
      <ExplorePackage />
      <Testimonial />
      <About />
      <div className="w-full px-[80px] my-[80px] max-[850px]:px-[50px] max-[600px]:px-[30px] ">
        <div
          className="relative w-full h-[400px] overflow-hidden bg-gray-300 rounded-[40px] max-[600px]:rounded-[20px] max-[550px]:h-[350px] "
          style={{
            backgroundImage: `url(${icons.home2})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="absolute w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-[50px] max-[700px]:text-[40px] max-[550px]:text-[23px] font-[600] text-white font-['lato']">Let's Plan Your Next Trip</h2>
            <h2 className=" text-[40px] max-[700px]:text-[30px] max-[550px]:text-[19px] font-[600] text-white font-['lato']">To Your Dream Location.</h2>
            <div className=" pt-[50px] duration-[0.5s] hover:scale-[1.05]">
              <Button value="BOOK NOW" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
