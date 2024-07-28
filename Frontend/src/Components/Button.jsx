import React from "react";
import { Link } from "react-router-dom";

function Button({ value, use, setUse }) {
  return (
    <div>
      <Link to="/package" onClick={() => setUse("package")}>
      <button className="bg-blue-950 text-white h-[60px] w-[150px] rounded-[25px] text-[20px] font-[400] duration-[0.5s] hover:scale-[1.05]">
        {value}
      </button>
      </Link>
    </div>
  );
}

export default Button;
