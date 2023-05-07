import React, { useEffect, useRef } from "react";

function LeftHandler() {
  return (
    <button className="absolute flex items-center justify-center gap-[3px] py-2 px-2 bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[30px] h-[30px] rounded-full border border-gray-400 bg-white z-10">
      <div className="w-[1px] h-full bg-gray-400"></div>
      <div className="w-[1px] h-full bg-gray-400"></div>
      <div className="w-[1px] h-full bg-gray-400"></div>
    </button>
  );
}

export default LeftHandler;
