import React from "react";
import MainButton from "../../../utilities/MainButton";
import { starIcon, downArrow } from "../../../assets/icons";
import GuestsCount from "./GuestsCount";

function ReserveCard() {
  return (
    <aside>
      <div className="p-5 border border-gray-300 shadow-md rounded-xl w-full">
        <div className="flex justify-between items-end mb-4">
          <div className="flex items-end gap-1">
            <strong className="text-2xl font-medium">MAD1,466</strong>
            <span className="text-gray-800 text-lg">night</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-4" src={starIcon} alt="star icon" />
            <strong>4.6</strong>.
            <p className="text-gray-600 underline">86 reviews</p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 rounded-md mb-4 h-[106px]">
          <label
            className="border border-gray-400 border-b-0 cursor-pointer border-r-0 relative rounded-ss-md"
            htmlFor="checkIn"
          >
            <span className="text-[11px] font-medium absolute top-2 left-3 uppercase">
              check-In
            </span>
            <span className="text-sm absolute top-6 left-3 uppercase">
              4/7/2023
            </span>
            <input
              className="w-full h-full absolute open-calendar cursor-pointer opacity-0"
              type="date"
              name="checkIn"
              id="checkIn"
            />
          </label>
          <label
            className="border border-gray-400 border-b-0 cursor-pointer relative rounded-se-md"
            htmlFor="checkIn"
          >
            <span className="text-[11px] font-medium absolute top-2 left-3 uppercase">
              check-Out
            </span>
            <span className="text-sm absolute top-6 left-3 uppercase">
              4/7/2023
            </span>
            <input
              className="w-full h-full absolute cursor-pointer open-calendar opacity-0"
              type="date"
              name="checkIn"
              id="checkIn"
            />
          </label>
          <label
            className="border relative border-gray-400 col-span-2 rounded-es-md rounded-ee-md"
            htmlFor="guests"
          >
            <span className="text-[11px] font-medium absolute top-2 left-3 uppercase">
              guests
            </span>
            <span className="text-sm absolute top-6 left-3 uppercase">
              1 guest
            </span>
            <img
              className="absolute top-1/2 -translate-y-1/2 right-3 w-5"
              src={downArrow}
              alt="down arrow"
            />
            <div className="absolute shadow-md top-full bg-white left-0 w-full border border-gray-500 rounded-md">
              <ul className="p-4 flex flex-col gap-3">
                <GuestsCount />
                <GuestsCount />
                <GuestsCount />
                <GuestsCount />
              </ul>
            </div>
          </label>
        </div>
        <MainButton label="Reserve" />
        <p className="text-center text-gray-600 mt-4 mb-6">
          You won't be charged yet
        </p>
        <div className="flex justify-between items-center mb-4">
          <p className="underline">MAD2,443 x 5 nights</p>
          <p>MAD12,214</p>
        </div>
        <div className="flex justify-between items-center pb-5 border-b border-gray-300">
          <p className="underline">Airbnb service fee</p>
          <p>MAD1,724</p>
        </div>
        <div className="flex justify-between items-center pt-6 pb-3 font-semibold text-base">
          <p>Total before taxes</p>
          <p>MAD1,724</p>
        </div>
      </div>
    </aside>
  );
}

export default ReserveCard;
