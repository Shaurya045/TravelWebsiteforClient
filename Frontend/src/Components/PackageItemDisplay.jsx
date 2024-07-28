import React from "react";
import { package_list } from "../assets/assets";
import ItemDisplay from "./ItemDisplay";

function PackageItemDisplay({ category, setCategory }) {
  return (
    <div className="mx-[70px] mt-[100px] mb-[50px]">
      <div className="flex flex-col gap-[30px]">
        {package_list
          .filter((item) => {
            if (category.trim() === "") {
              return true; // Return all items if no category is selected
            } else {
              const lowerCaseCategory = category.toLowerCase();
              // Check if any item category includes the partial match
              return item.category.some(cat =>
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