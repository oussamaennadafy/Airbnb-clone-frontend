import React, { useEffect } from "react";

import Header from "./Header";
import Form from "./Form";
import OtherAuthOptions from "./OtherAuthOptions";

function AuthModal({ setDisplayAuthModal }) {
  return (
    <div className="absolute top-0 left-0 w-screen">
      <div
        onClick={() => setDisplayAuthModal((previousState) => !previousState)}
        className="sticky top-0 w-screen h-screen bg-black opacity-50 z-30"
      />
      <section className="sticky top-0 h-full z-30 bg-white w-[560px] overflow-hidden rounded-xl shadow-lg border border-gray-200">
        <Header setDisplayAuthModal={setDisplayAuthModal} />
        <div className="overflow-auto h-[80vh]">
          <Form />
          <OtherAuthOptions />
        </div>
      </section>
    </div>
  );
}

export default AuthModal;
