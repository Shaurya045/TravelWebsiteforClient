import React, { useState } from "react";
import PackageHeader from "../Components/PackageHeader";
import PackageDisplay from "../Components/PackageDisplay";
import PackageItemDisplay from "../Components/PackageItemDisplay";

function Packages() {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <div className="w-full ">
      <PackageHeader />
      <PackageDisplay setFilterVisible={setFilterVisible} />
      <PackageItemDisplay filterVisible={filterVisible} />
    </div>
  );
}

export default Packages;
