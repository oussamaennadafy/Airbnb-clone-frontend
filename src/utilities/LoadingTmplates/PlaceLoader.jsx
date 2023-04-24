import React from "react";

function place() {
  return (
    <div className="lg:px-28 md:px-12 sm:px-6 px-4 animate-pulse">
      <figure className="mt-7 mb-12">
        <figcaption className="mb-5">
          <div className="h-8 w-5/12 bg-gray-200"></div>
          <div className="h-5 mt-3 w-3/12 bg-gray-200"></div>
        </figcaption>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-2 lg:h-[44vh] rounded-md overflow-hidden">
          <div className="bg-gray-200 col-span-2 row-span-2"></div>
          <div className="bg-gray-200"></div>
          <div className="bg-gray-200"></div>
          <div className="bg-gray-200"></div>
          <div className="bg-gray-200"></div>
        </div>
      </figure>
      <div className="grid grid-cols-[1fr-1fr] lg:grid-cols-[auto,40%] gap-10 lg:gap-24">
        <div>
          <div className="flex justify-between items-center border-b border-gray-300 pb-5">
            <div className="w-full">
              <div className="h-6 bg-gray-200 w-8/12 mb-2"></div>
              <div className="h-4 bg-gray-200 w-6/12 mb-2"></div>
            </div>
            <div className="rounded-full w-10 h-10 flex-shrink-0 bg-gray-200"></div>
          </div>
          <div className="pt-5 border-b border-gray-300">
            <div className="flex items-start gap-4 pb-4">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200"></div>
              <div className=" w-full">
                <div className="w-5/12 h-5 bg-gray-200 mb-3"></div>
                <div className="w-10/12 bg-gray-200 h-10"></div>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200"></div>
              <div className=" w-full">
                <div className="w-5/12 h-5 bg-gray-200 mb-3"></div>
                <div className="w-10/12 bg-gray-200 h-10"></div>
              </div>
            </div>
            <div className="flex items-start gap-4 pb-4">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-200"></div>
              <div className=" w-full">
                <div className="w-5/12 h-5 bg-gray-200 mb-3"></div>
                <div className="w-10/12 bg-gray-200 h-10"></div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="w-44 mb-3 h-10 bg-gray-200"></div>
            <div className="bg-gray-200"></div>
            <div className="bg-gray-200 h-12 w-full"></div>
            <div className="bg-gray-200 h-5 w-28 mt-3"></div>
          </div>
        </div>
        {/* <ReserveCard place={place} /> */}
        <div className="h-full w-full rounded-md bg-gray-200"></div>
      </div>
    </div>
  );
}

export default place;
