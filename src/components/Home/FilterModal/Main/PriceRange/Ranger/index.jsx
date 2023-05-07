import React from "react";
import Chart from "./Chart";
import Slider from "./Slider";

function Ranger() {
  return (
    <div className="h-32 bg-gray-200 mx-6 relative">
      <Chart />
      <Slider />
    </div>
  );
}

export default Ranger;
