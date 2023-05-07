import { React, forwardRef } from "react";
import { starIcon } from "./../../assets/icons";

const main = forwardRef(({ limit }, ref) => {
  const statisData = Array(limit).fill(null);
  return (
    <>
      {statisData.map((_, index) => (
        <figure
          className="animate-pulse"
          ref={index === 0 ? ref : null}
          key={index}
        >
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
    </>
  );
});

export default main;
