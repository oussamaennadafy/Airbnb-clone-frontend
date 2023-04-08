import React, { useState } from "react";
import { minusIcon, plusIcon } from "../../../assets/icons";

function GuestsCount({ label, age, defaultValue }) {
  const [counter, setCounter] = useState(defaultValue);
  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
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
          className="w-9 h-9 border border-gray-300 flex items-center justify-center rounded-full"
        >
          <img className="w-3" src={minusIcon} alt="minus" />
        </button>
        <p>{counter}</p>
        <button
          onClick={increment}
          className="w-9 h-9 border border-gray-300 flex items-center justify-center rounded-full"
        >
          <img className="w-3" src={plusIcon} alt="plus" />
        </button>
      </div>
    </li>
  );
}

export default GuestsCount;
