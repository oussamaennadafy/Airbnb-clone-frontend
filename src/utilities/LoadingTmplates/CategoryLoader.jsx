import React from "react";

function CategoryLoader() {
  return (
    <button className="min-w-max transition-all animate-pulse">
      <div className="w-7 h-7 mx-auto mb-1 bg-gray-200 rounded-full" />
      <p className="w-14 h-[10px] mt-2 bg-gray-200 rounded-lg"></p>
    </button>
  );
}

export default CategoryLoader;
