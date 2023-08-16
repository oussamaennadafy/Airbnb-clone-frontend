import React, { forwardRef, useEffect, useRef, useState } from "react";

const LeftHandler = forwardRef((props, ref) => {
  const [ableToMove, setAbleToMove] = useState(false);
  const [x, setX] = useState(0);

  //

  const { leftHandlerRef, lineRef, rightHandlerRef } = ref;

  //

  const handleMouseDown = (e) => {
    setAbleToMove(true);
    // console.log("mose down");
  };

  const handleDoubleclick = (e) => {
    setAbleToMove(true);
  };

  //
  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      setAbleToMove(false);
    });
  }, []);

  //

  useEffect(() => {
    const leftLimit = lineRef.current.getBoundingClientRect().x;
    const eventHandler = (e) => {
      if (!ableToMove) return;
      if (e.x < leftLimit) return;
      if (e.x > rightHandlerRef.current.getBoundingClientRect().x) return;

      setX(e.x - leftLimit);
    };
    document.addEventListener("mousemove", eventHandler);
    return () => document.removeEventListener("mousemove", eventHandler);
  }, [ableToMove, x]);

  //

  //

  return (
    <button
      ref={leftHandlerRef}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleclick}
      style={{ left: x }}
      className={`absolute flex items-center justify-center gap-[3px] py-2 px-2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[30px] h-[30px] rounded-full border border-gray-400 bg-white z-10 ${
        ableToMove ? "scale-110" : "scale-100"
      }`}
    >
      <div className="w-[1px] h-full bg-gray-400"></div>
      <div className="w-[1px] h-full bg-gray-400"></div>
      <div className="w-[1px] h-full bg-gray-400"></div>
    </button>
  );
});

export default LeftHandler;
