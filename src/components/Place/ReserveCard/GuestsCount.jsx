import React, { useState } from "react";
import { minusIcon, plusIcon } from "../../../assets/icons";

function GuestsCount({ label, age, value, setValue, minValue, maxValue }) {
  const increment = () => {
    if (value < maxValue) {
      setValue((prevCount) => prevCount + 1);
    }
  };
  const decrement = () => {
    if (value > (minValue || 0)) {
      setValue((prevCount) => prevCount - 1);
    }
  };
  return (
    <li className="flex items-center justify-between">
      <div className="flex flex-col">
        <p className="font-semibold">{label}</p>
        <span className="text-sm">{age}</span>
      </div>
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={decrement}
          className={`w-9 h-9 border border-gray-300 flex items-center justify-center rounded-full ${
            value === (minValue || 0) ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img className="w-3" src={minusIcon} alt="minus" />
        </button>
        <p>{value}</p>
        <button
          onClick={increment}
          className={`w-9 h-9 border border-gray-300 flex items-center justify-center rounded-full ${
            value === maxValue ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img className="w-3" src={plusIcon} alt="plus" />
        </button>
      </div>
    </li>
  );
}

export default GuestsCount;
