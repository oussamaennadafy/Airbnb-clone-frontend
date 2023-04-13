import React from "react";
import { starIcon } from "./../../assets/icons";

function main() {
  const statisData = Array(12).fill(null);
  return (
    <main
      id="Main"
      className="min-h-screen animate-pulse max-w-screen py-8 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-x-5 gap-y-10 mt-1 font-normal"
    >
      {statisData.map((_, index) => (
        <figure key={index}>
          <div className="min-w-full">
            <div className="h-[300px] rounded-lg bg-gray-200"></div>
          </div>
          <figcaption>
            <div className="flex justify-between items-start pt-1">
              <strong className="font-semibold bg-gray-200 w-8/12 h-5 mt-2 rounded-lg"></strong>
              <div className="w-1/6 h-5 mt-2 bg-gray-200 rounded-lg"></div>
            </div>
            <p className="bg-gray-200 mt-1 w-6/12 h-5 rounded-lg"></p>
            <p className="bg-gray-200 mt-1 w-4/12 h-5 rounded-lg"></p>
            <p className="bg-gray-200 mt-1 w-5/12 h-5 rounded-lg"></p>
          </figcaption>
        </figure>
      ))}
    </main>
  );
}

export default main;
