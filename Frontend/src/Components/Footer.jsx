import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Footer({ use, setUse }) {
  return (
    <div className="bg-sky-800 pt-[50px] text-[20px] text-white px-[80px] pb-[50px] flex flex-col items-center gap-[20px]">
      <div className="w-full grid grid-cols-[2fr_0.5fr_1.1fr_1fr] gap-[80px]">
        <p className="text-white text-[50px] font-[600]">madhovari</p>
        <div className="flex flex-col items-start gap-[10px]">
          <h2 className="text-yellow-500 underline underline-offset-[6px] text-[25px]">
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
                  } hover:text-orange-600`
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
              } hover:text-orange-600`}
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
                  } hover:text-orange-600`
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
                  } hover:text-orange-600`
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
          <h2 className="text-yellow-500 underline underline-offset-[6px] text-[25px]">Customer Support</h2>
          <ul className="list-none mb-[10px] text-[20px]">
            <li>Phone No.: (+91)99999 99999</li>
            <li>Email: info@madhovari.in</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[10px]">
          <h2 className="text-yellow-500 underline underline-offset-[6px] text-[25px]">Further Information</h2>
          <ul className="list-none mb-[10px] text-[20px]">
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[1px] m-[20px_0] bg-gray-500 border-none" />
      <div className="flex flex-row justify-between">
        <p>Copyright @ 2024 madhovari.in - All rights reserved</p>
        <div className="flex flex-row">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
