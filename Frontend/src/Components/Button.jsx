import React from "react";
import { Link } from "react-router-dom";

function Button({ value, use, setUse }) {
  return (
    <div>
      <Link to="/package" onClick={() => setUse("package")}>
      <button className="bg-[#003366] text-white h-[60px] w-[150px] rounded-[25px] text-[20px] font-[400] font-['lato'] duration-[0.5s] hover:scale-[1.05]">
        {value}
      </button>
      </Link>
    </div>
  );
}

export default Button;
