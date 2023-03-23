import React from "react";

import Header from "./Header";
import Form from "./Form";
import OtherAuthOptions from "./OtherAuthOptions";

function AuthModal({ setDisplayAuthModal }) {
  return (
    <>
      <div
        onClick={() => setDisplayAuthModal((previousState) => !previousState)}
        className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50 z-30"
      />
      <section className="absolute z-30 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] overflow-hidden rounded-xl shadow-lg border border-gray-200">
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
