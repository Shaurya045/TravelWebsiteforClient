import React, { useContext } from "react";
import UserContext from "./Context/UserContext";
import { package_list } from "../assets/assets";
import ItemDisplay from "./ItemDisplay";

function PackageItemDisplay({ filterVisible }) {
  const { category, setCategory } = useContext(UserContext);
  return (
    <div className="max-[1024px]:relative mx-[50px] mt-[100px] mb-[50px] flex flex-row justify-center gap-[30px] max-[477px]:mx-[20px]">
      <div className="w-[30%] max-[1024px]:hidden ">
        <ul className="flex flex-col gap-[10px] text-[20px] text-[#666666] font-[400] bg-[#66666620] p-[20px] rounded-[20px] ">
          <li
            className={`cursor-pointer font-["Merriweather"] ${
              category.toLowerCase() === "" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("")}
          >
            All
          </li>
          <li
            className={`cursor-pointer font-["Merriweather"] ${
              category.toLowerCase() === "luxury" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Luxury")}
          >
            Luxury
          </li>
          <li
            className={`cursor-pointer font-["Merriweather"] ${
              category.toLowerCase() === "spiritual" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Spiritual")}
          >
            Spiritual
          </li>
          <li
            className={`cursor-pointer font-["Merriweather"] ${
              category.toLowerCase() === "adventure" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Adventure")}
          >
            Adventure
          </li>
          <li
            className={`cursor-pointer font-["Merriweather"] ${
              category.toLowerCase() === "off beat" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Off Beat")}
          >
            Off Beat
          </li>
          <li
            className={`cursor-pointer font-["Merriweather"] ${
              category.toLowerCase() === "ecotourism" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Ecotourism")}
          >
            Ecotourism
          </li>
          <li
            className={`cursor-pointer font-["Merriweather"] ${
              category.toLowerCase() === "wild life and nature"
                ? "text-green-500"
                : ""
            }`}
            onClick={() => setCategory("Wild Life and Nature")}
          >
            Wild Life and Nature
          </li>
          <li
            className={`cursor-pointer font-["Merriweather"] ${
              category.toLowerCase() === "cultural" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Cultural")}
          >
            Cultural
          </li>
          <li
            className={`cursor-pointer font-["Merriweather"] ${
              category.toLowerCase() === "heritage" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Heritage")}
          >
            Heritage
          </li>
        </ul>
      </div>
      {filterVisible && (
        <div className="w-[30%] lg:hidden max-[1024px]:absolute max-[1024px]:top-[-50px] max-[1024px]:z-10 max-[1024px]:w-[90%]">
          <ul className="flex flex-col max-[1024px]:items-center gap-[10px] text-[20px] text-[#666666] font-[400] bg-[#66666620] p-[20px] rounded-[20px] ">
            <li
              className={`cursor-pointer font-["Merriweather"] ${
                category.toLowerCase() === "" ? "text-green-500" : ""
              }`}
              onClick={() => setCategory("")}
            >
              All
            </li>
            <li
              className={`cursor-pointer font-["Merriweather"] ${
                category.toLowerCase() === "luxury" ? "text-green-500" : ""
              }`}
              onClick={() => setCategory("Luxury")}
            >
              Luxury
            </li>
            <li
              className={`cursor-pointer font-["Merriweather"] ${
                category.toLowerCase() === "spiritual" ? "text-green-500" : ""
              }`}
              onClick={() => setCategory("Spiritual")}
            >
              Spiritual
            </li>
            <li
              className={`cursor-pointer font-["Merriweather"] ${
                category.toLowerCase() === "adventure" ? "text-green-500" : ""
              }`}
              onClick={() => setCategory("Adventure")}
            >
              Adventure
            </li>
            <li
              className={`cursor-pointer font-["Merriweather"] ${
                category.toLowerCase() === "off beat" ? "text-green-500" : ""
              }`}
              onClick={() => setCategory("Off Beat")}
            >
              Off Beat
            </li>
            <li
              className={`cursor-pointer font-["Merriweather"] ${
                category.toLowerCase() === "ecotourism" ? "text-green-500" : ""
              }`}
              onClick={() => setCategory("Ecotourism")}
            >
              Ecotourism
            </li>
            <li
              className={`cursor-pointer font-["Merriweather"] ${
                category.toLowerCase() === "wild life and nature"
                  ? "text-green-500"
                  : ""
              }`}
              onClick={() => setCategory("Wild Life and Nature")}
            >
              Wild Life and Nature
            </li>
            <li
              className={`cursor-pointer font-["Merriweather"] ${
                category.toLowerCase() === "cultural" ? "text-green-500" : ""
              }`}
              onClick={() => setCategory("Cultural")}
            >
              Cultural
            </li>
            <li
              className={`cursor-pointer font-["Merriweather"] ${
                category.toLowerCase() === "heritage" ? "text-green-500" : ""
              }`}
              onClick={() => setCategory("Heritage")}
            >
              Heritage
            </li>
          </ul>
        </div>
      )}
      <div
        className={`flex flex-col ${
          filterVisible ? "max-[1024px]:mt-[370px]" : ""
        }  gap-[30px] w-[80%] max-[1024px]:w-full`}
      >
        {package_list
          .filter((item) => {
            if (category.trim() === "") {
              return true; // Return all items if no category is selected
            } else {
              const lowerCaseCategory = category.toLowerCase();
              // Check if any item category includes the partial match
              return item.category.some((cat) =>
                cat.toLowerCase().includes(lowerCaseCategory)
              );
            }
          })
          .map((item, index) => {
            return (
              <ItemDisplay
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                day={item.day}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PackageItemDisplay;
