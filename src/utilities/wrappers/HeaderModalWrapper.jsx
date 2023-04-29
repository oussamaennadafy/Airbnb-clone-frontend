import React from "react";
import { CloseIcon } from "./../../assets/configurable-icons/";

function HeaderModalWrapper({ setDisplayModal, children }) {
  return (
    <header className="px-5 py-4 border-b border-gray-200 text-center relative">
      <button
        onClick={() => setDisplayModal((prevState) => !prevState)}
        className="absolute top-1/2 -translate-y-1/2 left-3 p-1 transition-all rounded-full hover:bg-gray-100"
      >
        <CloseIcon className="w-5 h-5" />
      </button>
      <span>{children}</span>
    </header>
  );
}

export default HeaderModalWrapper;
