import React from "react";
import DRLLOGO from "./../assets/Bottom_Logo.png";
const Footer = () => {
  return (
    <div className=" flex justify-center items-center py-[3rem] px-6 w-full bg-[#ffe9ff]">
      <img src={DRLLOGO} alt="drl" className="bottom_logo" />
    </div>
  );
};

export default Footer;
