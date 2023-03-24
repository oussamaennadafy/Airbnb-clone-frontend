import React, { useEffect } from "react";

import Header from "./Header";
import Form from "./Form";
import OtherAuthOptions from "./OtherAuthOptions";

function AuthModal({ setDisplayAuthModal, displayAuthModal }) {
  return (
    <>
      <div
        onClick={() => setDisplayAuthModal((previousState) => !previousState)}
        className={`fixed top-0 w-screen h-screen bg-black opacity-50 z-30 ${
          displayAuthModal
            ? "transition-all duration-500 opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      />
      <section
        className={`fixed top-1/2 left-1/2 ${
          displayAuthModal
            ? "transition-all duration-500 opacity-100 -translate-y-1/2 pointer-events-auto visible"
            : "opacity-0 translate-y-full pointer-events-none invisible"
        } -translate-x-1/2 z-30 bg-white w-full h-full sm:h-[90%] 2xl:h-[80%] sm:w-[560px] overflow-hidden rounded-xl shadow-lg border border-gray-200`}
      >
        <Header setDisplayAuthModal={setDisplayAuthModal} />
        <div className="overflow-auto h-[80vh]">
          <Form />
          <OtherAuthOptions />
        </div>
      </section>
    </>
  );
}

export default AuthModal;
