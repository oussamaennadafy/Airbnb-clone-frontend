import React, { useEffect } from "react";
import LeftHandler from "./LeftHandler";
import Line from "./Line";
import RightHandler from "./RightHandler";

function Slider() {
  return (
    <>
      <LeftHandler />
      <Line />
      <RightHandler />
    </>
  );
}

export default Slider;
