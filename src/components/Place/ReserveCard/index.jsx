import React, { useState } from "react";
import MainButton from "../../../utilities/MainButton";
import { starIcon, downArrow } from "../../../assets/icons";
import GuestsCount from "./GuestsCount";

function ReserveCard({ place }) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [checkIn, setCheckIn] = useState(
    new Date(place.from).toISOString().substring(0, 10)
  );
  const [checkOut, setCheckOut] = useState(
    new Date(place.to).toISOString().substring(0, 10)
  );
  const datediff = (first, second) => {
    return Math.round(
      (new Date(second).getTime() - new Date(first).getTime()) /
        (1000 * 60 * 60 * 24)
    );
  };
  const [days, setDays] = useState(datediff(checkIn, checkOut));
  const toggleMenu = () => {
    setDisplayMenu((prevState) => !prevState);
  };
  return (
    <aside>
      <div className="p-5 mb-14 border border-gray-300 shadow-md rounded-xl w-full">
        <div className="flex justify-between items-end mb-4">
          <div className="flex items-end gap-1">
            <strong className="text-2xl font-medium">{place.price}</strong>
            <span className="text-gray-800 text-lg">night</span>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-3" src={starIcon} alt="star icon" />
            <strong>{place.ratingAverage}</strong>.
            <p className="text-gray-600 underline cursor-pointer">
              {place.ratingsCount} reviews
            </p>
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
              {checkIn}
            </span>
            <input
              className="w-full h-full absolute open-calendar cursor-pointer opacity-0"
              type="date"
              name="checkIn"
              id="checkIn"
              onChange={(e) => {
                setCheckIn(() => e.target.value);
                setDays(() => datediff(checkIn, checkOut));
              }}
              value={checkIn}
              min={
                place.from &&
                new Date(place.from).toISOString().substring(0, 10)
              }
              max={
                place.to && new Date(place.to).toISOString().substring(0, 10)
              }
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
              {checkOut}
            </span>
            <input
              className="w-full h-full absolute cursor-pointer open-calendar opacity-0"
              type="date"
              name="checkOut"
              id="checkOut"
              value={checkOut}
              onChange={(e) => {
                setCheckOut(() => e.target.value);
                setDays(() => datediff(checkIn, checkOut));
              }}
              min={
                place.from &&
                new Date(place.from).toISOString().substring(0, 10)
              }
              max={
                place.to && new Date(place.to).toISOString().substring(0, 10)
              }
            />
          </label>
          <label
            className="border select-none relative border-gray-400 col-span-2 rounded-es-md rounded-ee-md"
            htmlFor="guests"
            onClick={toggleMenu}
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
            {displayMenu && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute p-4 flex flex-col shadow-md top-full bg-white left-0 w-full border border-gray-300 rounded-md"
              >
                <ul className="flex flex-col gap-3">
                  <GuestsCount
                    label="Adults"
                    age="Age 13+"
                    defaultValue={1}
                    maxValue={place.maxAdults}
                  />
                  <GuestsCount
                    label="kids"
                    age="Ages 2-12"
                    defaultValue={0}
                    maxValue={place.maxChildren}
                  />
                  <GuestsCount
                    label="Infants"
                    age="Under 2"
                    defaultValue={0}
                    maxValue={place.maxInfants}
                  />
                  <GuestsCount
                    label="Pets"
                    age="Bringing a service animal?"
                    defaultValue={0}
                    maxValue={place.maxPets}
                  />
                </ul>
                <p className="mt-3 text-xs">
                  You can always contact the owner to discuss the details.
                </p>
                <button
                  onClick={toggleMenu}
                  className="underline font-semibold mt-3 w-fit place-self-end px-3 py-1 hover:bg-gray-100 rounded-md transition"
                >
                  Close
                </button>
              </div>
            )}
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
