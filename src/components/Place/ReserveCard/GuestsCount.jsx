import React from "react";
import { minusIcon, plusIcon } from "../../../assets/icons";

function GuestsCount() {
  return (
    <li className="flex items-center justify-between">
      <div className="flex flex-col">
        <p className="font-semibold">Adults</p>
        <span className="text-sm">Age 13+</span>
      </div>
      <div className="flex items-center justify-between gap-3">
        <button className="w-9 h-9 border border-gray-300 flex items-center justify-center rounded-full">
          <img className="w-3" src={minusIcon} alt="minus" />
        </button>
        <p>1</p>
        <button className="w-9 h-9 border border-gray-300 flex items-center justify-center rounded-full">
          <img className="w-3" src={plusIcon} alt="plus" />
        </button>
      </div>
    </li>
  );
}

export default GuestsCount;
