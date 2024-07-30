import React, { useState } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

function Navbar({use,setUse}) {
  return (
    <div className="relative flex justify-between h-[60px] px-[17px] mx-[120px] mt-[30px] rounded-[10px] items-center z-50">
      <Link to="/" onClick={() => setUse("home")}>
        <img src="" alt="LOGO" />
      </Link>
        <ul className="flex justify-between items-center px-[40px] bg-white h-full rounded-[25px] w-[750px] text-[20px] font-[400]">
          <li>
            <NavLink
              to="/"
              onClick={() => setUse("home")}
              className={({ isActive }) =>
                `${
                  isActive && use === "home"
                    ? "text-orange-600 underline"
                    : "text-gray-500"
                } hover:text-orange-600`
              }
            >
              HOME
            </NavLink>
          </li>
          <a href="#about" onClick={() => setUse("about")} className={`${use==="about"?"text-orange-600 underline"
                    : "text-gray-500"} hover:text-orange-600`}>
            ABOUT
          </a>
          <li>
            <NavLink
              to="/package"
              onClick={() => setUse("package")}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-orange-600 underline"
                    : "text-gray-500"
                } hover:text-orange-600`
              }
            >
              PACKAGES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setUse("contact")}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-orange-600 underline"
                    : "text-gray-500"
                } hover:text-orange-600`
              }
            >
              CONTACT
            </NavLink>
          </li>
          {/* <a href="#contact" onClick={() => setUse("contact")} className={`${use==="contact"?"text-orange-600 underline"
                    : "text-gray-500"} hover:text-orange-600`}>
            CONTACT
          </a> */}
        </ul>
      <Button value="BOOK NOW"/>
    </div>
  );
}

export default Navbar;
