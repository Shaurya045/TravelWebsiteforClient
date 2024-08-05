import React, { useState } from "react";
import PackageHeader from "../Components/PackageHeader";
import PackageDisplay from "../Components/PackageDisplay";
import PackageItemDisplay from "../Components/PackageItemDisplay";

function Packages() {
  const [category, setCategory] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <div className="w-full ">
      <PackageHeader />
      <PackageDisplay category={category} setCategory={setCategory} setFilterVisible={setFilterVisible} />
      <PackageItemDisplay category={category} setCategory={setCategory} filterVisible={filterVisible} />
    </div>
  );
}

export default Packages;
