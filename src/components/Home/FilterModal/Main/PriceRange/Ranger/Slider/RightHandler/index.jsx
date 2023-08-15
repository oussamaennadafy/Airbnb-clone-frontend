import React, { forwardRef, useState, useEffect } from "react";

const RightHandler = forwardRef((props, ref) => {
  const [ableToMove, setAbleToMove] = useState(false);
  const [x, setX] = useState(-30);

  //

  const { leftHandlerRef, lineRef, rightHandlerRef } = ref;

  //

  const handleMouseDown = (e) => {
    setAbleToMove(true);
    // console.log("mose down");
  };

  //
  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      setAbleToMove(false);
    });
  }, []);

  //

  useEffect(() => {
    const rightLimit = lineRef.current.getBoundingClientRect().right;
    const eventHandler = (e) => {
      if (!ableToMove) return;
      if (e.x > rightLimit) return;
      if (e.x < leftHandlerRef.current.getBoundingClientRect().x + 30) return;
      setX(lineRef.current.getBoundingClientRect().right - e.x - 30);
      console.log(lineRef.current.getBoundingClientRect().right - e.x - 100);
    };
    document.addEventListener("mousemove", eventHandler);
    return () => document.removeEventListener("mousemove", eventHandler);
  }, [ableToMove, x]);

  //
  return (
    <button
      ref={rightHandlerRef}
      onMouseDown={handleMouseDown}
      style={{ right: x }}
      className="absolute flex items-center justify-center gap-[3px] py-2 px-2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[30px] h-[30px] rounded-full border border-gray-400 bg-white z-10"
    >
      <div className="w-[1px] h-full bg-gray-400"></div>
      <div className="w-[1px] h-full bg-gray-400"></div>
      <div className="w-[1px] h-full bg-gray-400"></div>
    </button>
  );
});

export default RightHandler;
