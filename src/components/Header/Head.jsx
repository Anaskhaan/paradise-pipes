import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <div className="bg-[#252e3d] text-white flex items-center justify-between px-4 md:px-12 py-2 text-sm md:text-base">
      <span className="">Get 5% Discount today.</span>
      <Link to="tel:+0928621188" className="text-white">
        +0928-621188
      </Link>
    </div>
  );
};

export default Head;
