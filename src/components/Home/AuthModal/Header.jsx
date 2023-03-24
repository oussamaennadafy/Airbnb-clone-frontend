import React from "react";

import { closeIcon } from "../../../assets/icons";

function Header({ setDisplayAuthModal }) {
  return (
    <header className="sticky top-0 border-b p-3 border-gray-200 flex items-center">
      <div
        onClick={() => setDisplayAuthModal((previousState) => !previousState)}
        className="rounded-full p-2 hover:bg-gray-100 cursor-pointer transition"
      >
        <img src={closeIcon} alt="close window" />
      </div>
      <h2 className="flex-1 text-center h-fit font-semibold pr-10">
        Log in or sign up
      </h2>
    </header>
  );
}

export default Header;
