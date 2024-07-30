import React from "react";
import { package_list } from "../assets/assets";
import ItemDisplay from "./ItemDisplay";

function PackageItemDisplay({ category, setCategory }) {
  return (
    <div className="mx-[70px] mt-[100px] mb-[50px] flex flex-row gap-[30px]">
      <div className="w-[30%]">
        <ul className="flex flex-col gap-[10px] text-[20px] font-[400] bg-slate-200 p-[20px] rounded-[20px] ">
          <li
            className={`cursor-pointer ${
              category.toLowerCase() === "" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("")}
          >
            All
          </li>
          <li
            className={`cursor-pointer ${
              category.toLowerCase() === "luxury" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Luxury")}
          >
            Luxury
          </li>
          <li
            className={`cursor-pointer ${
              category.toLowerCase() === "spiritual" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Spiritual")}
          >
            Spiritual
          </li>
          <li
            className={`cursor-pointer ${
              category.toLowerCase() === "adventure" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Adventure")}
          >
            Adventure
          </li>
          <li
            className={`cursor-pointer ${
              category.toLowerCase() === "off beat" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Off Beat")}
          >
            Off Beat
          </li>
          <li
            className={`cursor-pointer ${
              category.toLowerCase() === "ecotourism" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Ecotourism")}
          >
            Ecotourism
          </li>
          <li
            className={`cursor-pointer ${
              category.toLowerCase() === "wild life and nature"
                ? "text-green-500"
                : ""
            }`}
            onClick={() => setCategory("Wild Life and Nature")}
          >
            Wild Life and Nature
          </li>
          <li
            className={`cursor-pointer ${
              category.toLowerCase() === "cultural" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Cultural")}
          >
            Cultural
          </li>
          <li
            className={`cursor-pointer ${
              category.toLowerCase() === "heritage" ? "text-green-500" : ""
            }`}
            onClick={() => setCategory("Heritage")}
          >
            Heritage
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-[30px] w-[80%]">
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
