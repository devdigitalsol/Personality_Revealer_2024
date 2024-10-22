import React from "react";
import DRLLOGO from "./../assets/GE_logo.png";
const Header = () => {
  return (
    <div className="flex justify-center flex-shrink-0 items-center pt-5 pb-4 px-6 w-full  bg-[#ffe9ff]">
      <img src={DRLLOGO} alt="drl" className="top_logo" />
    </div>
  );
};

export default Header;
