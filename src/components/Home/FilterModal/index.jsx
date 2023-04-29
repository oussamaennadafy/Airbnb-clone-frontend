import React from "react";

function index({ setDisplayFilterModal, displayFilterModal }) {
  if (!displayFilterModal) return null;
  return (
    <>
      <div
        onClick={() => setDisplayFilterModal((previousState) => !previousState)}
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-30"
      ></div>
      <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 moveUpAbsoluteElement z-30 bg-white w-full h-full sm:h-[90%] 2xl:h-[80%] sm:w-[560px] overflow-hidden rounded-xl shadow-lg border border-gray-200"></section>
    </>
  );
}

export default index;
