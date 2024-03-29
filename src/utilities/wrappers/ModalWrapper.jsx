import React, { useEffect } from "react";

function ModalWrapper({ setDisplayModal, displayModal, className, children }) {
  //
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [displayModal]);

  if (!displayModal) return null;

  return (
    <>
      <div
        onClick={() => setDisplayModal((previousState) => !previousState)}
        className="fixed top-0 w-screen h-screen bg-black opacity-50 z-30"
      />
      <section
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 moveUpAbsoluteElement z-30 bg-white w-full h-full sm:h-[80%] 2xl:h-[80%] overflow-hidden rounded-xl shadow-lg border border-gray-200 ${
          className || ""
        }`}
      >
        {children}
      </section>
    </>
  );
}

export default ModalWrapper;
