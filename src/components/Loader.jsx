import React from "react";

const Loader = () => {
  return (
    <div className="bg-gray-900/75 fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
      <div className="text-white">Loading please wait ...</div>
    </div>
  );
};

export default Loader;
