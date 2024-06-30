import React, { useState } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

function Navbar({use,setUse}) {
//   const [use, setUse] = useState("home");
  return (
    <div className="flex justify-between bg-blue-400 h-[60px] px-[17px] mx-[120px] mt-[30px] rounded-[10px] items-center z-50">
      <Link to="/" onClick={() => setUse("home")}>
        <img src="" alt="LOGO" />
      </Link>
        <ul className="flex justify-between items-center px-[40px] bg-white h-full rounded-[10px] w-[750px] text-[20px] font-[400]">
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
                  isActive && use === "package"
                    ? "text-orange-600 underline"
                    : "text-gray-500"
                } hover:text-orange-600`
              }
            >
              PACKAGES
            </NavLink>
          </li>
          <a href="#contact" onClick={() => setUse("contact")} className={`${use==="contact"?"text-orange-600 underline"
                    : "text-gray-500"} hover:text-orange-600`}>
            CONTACT
          </a>
        </ul>
      <Button value="BOOK NOW"/>
    </div>
  );
}

export default Navbar;
