import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import { Analytics } from "@vercel/analytics/react";
import { icons } from "./assets/assets";

function App() {
  const [use, setUse] = useState("home");
  return (
    <>
      <ScrollTop />
      <Navbar use={use} setUse={setUse} />
      <div className="z-20 fixed bottom-[10%] right-[5%] flex flex-col gap-[10px]">
        <a href="tel: +918210080108">
          <div className="w-[60px] h-[60px] bg-sky-400 rounded-[50%] flex flex-row justify-center items-center md:hidden">
            <img className="w-[60px]" src={icons.phone} alt="" />
          </div>
        </a>
        <a
          href={`https://wa.me/918210080108?text=Hi, I want to know more information for the trip `}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-[60px] h-[60px] bg-green-400 rounded-[50%] flex flex-row justify-center items-center">
            <img src={icons.whatsapp} alt="" />
          </div>
        </a>
      </div>
      <div className="absolute top-0 w-full">
        <Outlet use={use} setUse={setUse} />
        <Footer use={use} setUse={setUse} />
      </div>
      <Analytics />
    </>
  );
}

export default App;
