import React from "react";
import { shareIcon } from "./../../../assets/icons";
import { HeartIcon, LeftArrowIcon } from "./../../../assets/configurable-icons";

function index({ toggleGallery, images }) {
  return (
    <section className="absolute top-0 left-0 w-screen moveUp bg-white z-20">
      <div className="w-full px-9 py-5 flex justify-between items-center fixed bg-white border-b border-gray-200">
        <button
          onClick={toggleGallery}
          className="p-3 rounded-full hover:bg-gray-200 transition-all"
        >
          <LeftArrowIcon className="w-3 h-3 stroke-2 stroke-black" />
        </button>
        <div className="flex justify-between items-center gap-5 cursor-pointer">
          <div className="flex justify-between items-center gap-2">
            <img className="w-4 h-4" src={shareIcon} alt="save icon" />
            <span className="underline">share</span>
          </div>
          <div className="flex justify-between items-center gap-2 cursor-pointer">
            <HeartIcon className="w-5 h-5 stroke-black fill-white stroke-2" />
            <span className="underline">Save</span>
          </div>
        </div>
      </div>
      <div className="w-8/12 grid grid-cols-2 gap-2 mx-auto mt-24 mb-10">
        {images.map((image) => (
          <img
            className="w-full col-span-2 gallery-imgs"
            key={image}
            src={image}
          />
        ))}
      </div>
    </section>
  );
}

export default index;
