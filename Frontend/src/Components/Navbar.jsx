import React, { useState } from "react";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { icons } from "../assets/assets";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar({ use, setUse }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative flex gap-[50px] w-full max-[1024px]:justify-between max-[1024px]:px-[60px] max-[560px]:px-[30px] items-center h-[60px] px-[120px] mt-[30px] rounded-[10px] z-50">
      <Link to="/" onClick={() => setUse("home")}>
        <img
          className="w-[180px] mr-auto"
          src={icons.madhovariLogo}
          alt="LOGO"
        />
      </Link>

      <div className="flex justify-between items-center px-[40px] bg-white h-full rounded-[25px] w-full text-[20px] font-[400] max-[1024px]:hidden">
        <NavLink
          to="/"
          onClick={() => setUse("home")}
          className={({ isActive }) =>
            `${
              isActive && use === "home"
                ? "text-orange-600"
                : "text-gray-500"
            } hover:text-orange-600 font-['lato']`
          }
        >
          HOME
        </NavLink>
        <a
          href="/#about"
          onClick={() => setUse("about")}
          className={`${
            use === "about" ? "text-orange-600" : "text-gray-500"
          } hover:text-orange-600 font-['lato']`}
        >
          ABOUT
        </a>
        <NavLink
          to="/package"
          onClick={() => setUse("package")}
          className={({ isActive }) =>
            `${
              isActive ? "text-orange-600" : "text-gray-500"
            } hover:text-orange-600 font-['lato']`
          }
        >
          PACKAGES
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setUse("contact")}
          className={({ isActive }) =>
            `${
              isActive ? "text-orange-600" : "text-gray-500"
            } hover:text-orange-600 font-['lato']`
          }
        >
          CONTACT
        </NavLink>
      </div>
      <div className="max-[1024px]:hidden">
        <Button value="BOOK NOW" />
      </div>

      <div className="min-[1024px]:hidden flex items-center w-[40px] h-[40px] justify-center bg-white rounded-[50%]">
        <button onClick={() => setNavOpen(!navOpen)} className="text-3xl">
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {navOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-lg min-[1024px]:hidden flex flex-col items-center rounded-[15px] text-[20px] font-[400]">
          <NavLink
            to="/"
            onClick={() => {
              setUse("home");
              setNavOpen(false);
            }}
            className={({ isActive }) =>
              `${
                isActive && use === "home"
                  ? "text-orange-600"
                  : "text-gray-500"
              } hover:text-orange-600 font-['lato'] py-4`
            }
          >
            HOME
          </NavLink>
          <a
            href="/#about"
            onClick={() => {
              setUse("about");
              setNavOpen(false);
            }}
            className={`${
              use === "about" ? "text-orange-600" : "text-gray-500"
            } hover:text-orange-600 font-['lato'] py-4`}
          >
            ABOUT
          </a>
          <NavLink
            to="/package"
            onClick={() => {
              setUse("package");
              setNavOpen(false);
            }}
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-600" : "text-gray-500"
              } hover:text-orange-600 font-['lato'] py-4`
            }
          >
            PACKAGES
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => {
              setUse("contact");
              setNavOpen(false);
            }}
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-600" : "text-gray-500"
              } hover:text-orange-600 font-['lato'] py-4`
            }
          >
            CONTACT
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
