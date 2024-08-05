import React from "react";
import { icons } from "../assets/assets";

function About() {
  return (
    <div
      className="flex flex-row px-[100px] pt-[70px] gap-[70px] mt-[80px] mb-[150px] max-[640px]:px-[30px]"
      id="about"
    >
      <div className="w-[40%] h-[580px] bg-gray-300 rounded-[20px] max-[1024px]:hidden">
        <img
          className="w-full h-full object-cover rounded-[20px]"
          src={icons.rajasthan}
          alt="About"
        />
      </div>
      <div className="flex flex-col gap-[30px] w-[60%] max-[1024px]:w-full ">
        <h2 className="text-[50px] font-[500] font-['Merriweather'] max-[527px]:text-[30px]">
          About Madhovari
        </h2>
        <div className="w-full h-[400px] bg-gray-300 rounded-[20px] min-[1025px]:hidden">
          <img
            className="w-full h-full object-cover rounded-[20px]"
            src={icons.rajasthan}
            alt="About"
          />
        </div>
        <p className="text-[#666666] text-[25px] max-[527px]:text-[22px] w-full font-[400] font-['Lato']">
          Welcome to Madhovari, your ultimate travel companion. We specialize in
          crafting personalized tour packages that cater to your unique travel
          desires. Our mission is to turn your travel dreams into reality with
          high-quality, hassle-free services.
        </p>
        <p className="text-[#666666] text-[25px] max-[527px]:text-[22px] w-full font-[400] font-['Lato']">
          Discover a wide range of destinations, from the majestic Himalayas to
          serene beaches, all with the expert guidance of our dedicated team. At
          Madhovari, we value customer satisfaction, integrity, and sustainable
          tourism practices.
        </p>
        <p className="text-[#666666] text-[25px] max-[527px]:text-[22px] w-full font-[400] font-['Lato']">
          Join us on a journey where every trip is a new story waiting to be
          told. Explore the world with Madhovari and create memories that last a
          lifetime.
        </p>
      </div>
    </div>
  );
}

export default About;
