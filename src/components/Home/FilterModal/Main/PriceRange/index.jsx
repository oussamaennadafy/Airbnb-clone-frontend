import React from "react";
import SectionWrapper from "../SectionWrapper";
import MaxInput from "./MaxInput";
import MinInput from "./MinInput";
import Chart from "./Chart.jsx";

function PriceRange() {
  return (
    <SectionWrapper title="Price Range">
      <p className="text-gray-600 font-normal mb-3">
        The average nightly price is MAD2,136
      </p>
      <Chart />
      <div className="flex items-center justify-between px-6 mt-5 w-full gap-2 font-normal">
        <MinInput />
        <span>–</span>
        <MaxInput />
      </div>
    </SectionWrapper>
  );
}

export default PriceRange;
