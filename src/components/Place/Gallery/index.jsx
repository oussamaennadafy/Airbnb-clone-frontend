import React from "react";
import { leftArrow, shareIcon } from "../../../assets/icons";
import { HeartIcon } from "./../../../assets/configurable-icons";

function index({ toggleGallery }) {
  return (
    <section className="absolute top-0 left-0 w-screen h-screen moveUpSolw bg-white z-20">
      <div className="w-full px-9 py-5 flex justify-between items-center">
        <button
          onClick={toggleGallery}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <img className="w-3" src={leftArrow} alt="left arrow icon" />
        </button>
        <div className="flex justify-between items-center gap-2">
          <div className="flex justify-between items-center gap-2">
            <img className="w-3" src={shareIcon} alt="save icon" />
            <span className="underline">Save</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            {/* <img className="w-3" src={heartIcon} alt="share icon" /> */}
            <HeartIcon fill="white" stroke="black" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
