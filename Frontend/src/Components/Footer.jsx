import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { icons } from "../assets/assets";

function Footer({ use, setUse }) {
  return (
    <div className="bg-[#003366] pt-[50px] text-[20px] text-white px-[40px] md:px-[80px] pb-[50px] flex flex-col gap-[20px] w-full overflow-hidden">
      <div className="w-full gap-[20px] grid md:grid-cols-[2fr_0.5fr_1.1fr_1fr] md:gap-[40px] lg:gap-[80px]">
        {/* <p className="text-white text-[50px] font-[600]">madhovari</p> */}
        <img src={icons.madhovariLogo} alt="" />
        <div className="flex flex-col items-start gap-[10px]">
          <h2 className="text-[#D4AF37] underline underline-offset-[6px] text-[24px] font-[400] font-['Lato']">
            Pages
          </h2>
          <ul className="list-none mb-[10px] text-[20px]">
            <li>
              <NavLink
                to="/"
                onClick={() => setUse("home")}
                className={({ isActive }) =>
                  `${
                    isActive && use === "home"
                      ? "text-orange-600"
                      : "text-white"
                  } hover:text-orange-600 text-[20px] font-[400] font-['Lato']`
                }
              >
                Home
              </NavLink>
            </li>
            <a
              href="#about"
              onClick={() => setUse("about")}
              className={`${
                use === "about" ? "text-orange-600" : "text-white"
              } hover:text-orange-600 text-[20px] font-[400] font-['Lato']`}
            >
              About
            </a>
            <li>
              <NavLink
                to="/package"
                onClick={() => setUse("package")}
                className={({ isActive }) =>
                  `${
                    isActive 
                      ? "text-orange-600 "
                      : "text-white"
                  } hover:text-orange-600 text-[20px] font-[400] font-['Lato']`
                }
              >
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setUse("contact")}
                className={({ isActive }) =>
                  `${
                    isActive 
                      ? "text-orange-600 "
                      : "text-white"
                  } hover:text-orange-600 text-[20px] font-[400] font-['Lato']`
                }
              >
                Contact
              </NavLink>
            </li>
            {/* <a
              href="#contact"
              onClick={() => setUse("contact")}
              className={`${
                use === "contact" ? "text-orange-600" : "text-white"
              } hover:text-orange-600`}
            >
              Contact
            </a> */}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <h2 className="text-[#D4AF37] underline underline-offset-[6px] text-[24px] font-[400] font-['Lato']">Customer Support</h2>
          <ul className="list-none mb-[10px] text-[20px]">
            <li className="text-[20px] font-[400] font-['Lato']">Phone No.: (+91)99999 99999</li>
            <li className="text-[20px] font-[400] font-['Lato']">Email: info@madhovari.in</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <h2 className="text-[#D4AF37] underline underline-offset-[6px] text-[24px] font-[400] font-['Lato']">Further Information</h2>
          <ul className="list-none mb-[10px] text-[20px]">
            <li className="text-[20px] font-[400] font-['Lato']">Terms of use</li>
            <li className="text-[20px] font-[400] font-['Lato']">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[1px] m-[20px_0] bg-[#666666] border-none" />
      <div className="flex flex-col gap-4 lg:flex-row justify-between">
        <p className="text-[#666666] font-['Lato']">Copyright &copy; 2024 madhovari.in - All rights reserved</p>
        <div className="flex flex-row gap-[20px]">
          <img src={icons.facebook} alt="" />
          <img src={icons.instagram} alt="" />
          <img src={icons.xIcon} alt="" />
          <img src={icons.linkedin} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
