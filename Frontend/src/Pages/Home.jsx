import React from "react";
import Header from "../Components/Header";
import Testimonial from "../Components/Testimonial";
import About from "../Components/About";
import ExplorePackage from "../Components/ExplorePackage";
import Contact from "../Components/Contact";
import { homeImages } from "../assets/assets";
import Button from "../Components/Button";

function Home({ use, setUse }) {
  return (
    <div>
      <Header use={use} setUse={setUse} />
      <ExplorePackage />
      <Testimonial />
      <About />
      <Contact />
      <div className="mx-[100px] my-[80px]">
        <div
          className="relative w-full h-[400px] overflow-hidden bg-gray-300 rounded-[40px] "
          id="booknow"
        >
          <img
            className="absolute top-[-500px] w-full"
            src={homeImages.home2}
            alt=""
          />
          <div className="absolute flex flex-col items-center top-[80px] left-[30%]">
            <h2 className="text-[50px] font-[500] text-white">Let's Plan Your Next Trip</h2>
            <h2 className="mt-[-10px] text-[40px] font-[500] text-white">To Your Dream Location.</h2>
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
