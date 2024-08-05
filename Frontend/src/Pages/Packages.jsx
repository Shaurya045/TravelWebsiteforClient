import React, { useState } from "react";
import PackageHeader from "../Components/PackageHeader";
import PackageDisplay from "../Components/PackageDisplay";
import PackageItemDisplay from "../Components/PackageItemDisplay";

function Packages() {
  const [category, setCategory] = useState("");
  return (
    <div className="w-full ">
      <PackageHeader />
      <PackageDisplay category={category} setCategory={setCategory} />
      <PackageItemDisplay category={category} setCategory={setCategory} />
    </div>
  );
}

export default Packages;
