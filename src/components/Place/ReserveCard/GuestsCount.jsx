import React, { useState } from "react";
import { minusIcon, plusIcon } from "../../../assets/icons";

function GuestsCount({ label, age, defaultValue, maxValue }) {
  const [counter, setCounter] = useState(defaultValue);
  const increment = () => {
    if (counter < maxValue) {
      setCounter((prevCount) => prevCount + 1);
    }
  };
  const decrement = () => {
    if (counter > defaultValue) {
      setCounter((prevCount) => prevCount - 1);
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
            counter === defaultValue ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img className="w-3" src={minusIcon} alt="minus" />
        </button>
        <p>{counter}</p>
        <button
          onClick={increment}
          className={`w-9 h-9 border border-gray-300 flex items-center justify-center rounded-full ${
            counter === maxValue ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img className="w-3" src={plusIcon} alt="plus" />
        </button>
      </div>
    </li>
  );
}

export default GuestsCount;
