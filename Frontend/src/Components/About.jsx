import React from "react";
import { icons } from "../assets/assets";

function About() {
  return (
    <div className="flex flex-row px-[100px] pt-[70px] gap-[70px] mb-[100px]" id="about">
      <div className="w-[40%] h-[580px] bg-gray-300 rounded-[20px]">
        <img className="w-full h-full object-cover rounded-[20px]" src={icons.rajasthan} alt="About" />
      </div>
      <div className="flex flex-col gap-[30px] w-[60%]">
        <h2 className="text-[50px] font-[500]">About Madhovari</h2>
        <p className="text-[25px] font-[400]">
          Welcome to Madhovari, your ultimate travel companion. We specialize in crafting personalized tour packages that cater to your unique travel desires. Our mission is to turn your travel dreams into reality with high-quality, hassle-free services.
        </p>
        <p className="text-[25px] font-[400]">
          Discover a wide range of destinations, from the majestic Himalayas to serene beaches, all with the expert guidance of our dedicated team. At Madhovari, we value customer satisfaction, integrity, and sustainable tourism practices.
        </p>
        <p className="text-[25px] font-[400]">
          Join us on a journey where every trip is a new story waiting to be told. Explore the world with Madhovari and create memories that last a lifetime.
        </p>
      </div>
    </div>
  );
}

export default About;
