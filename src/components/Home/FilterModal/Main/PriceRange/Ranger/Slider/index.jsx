import React, { useEffect, useRef } from "react";
import LeftHandler from "./LeftHandler";
import Line from "./Line";
import RightHandler from "./RightHandler";

function Slider() {
  const lineRef = useRef();
  const leftHandlerRef = useRef();
  const rightHandlerRef = useRef();

  return (
    <>
      <LeftHandler ref={{ leftHandlerRef, lineRef, rightHandlerRef }} />
      <Line ref={lineRef} />
      <RightHandler ref={{ leftHandlerRef, lineRef, rightHandlerRef }} />
    </>
  );
}

export default Slider;
