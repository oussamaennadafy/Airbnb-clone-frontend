import React from "react";

function Footer() {
  return (
    <footer className="p-4 border-t border-gray-200 flex items-center justify-between">
      <a className="font-semibold underline px-3 py-2 rounded border-none transition hover:bg-gray-100 cursor-pointer">
        Clear all
      </a>
      <button className="bg-black rounded-lg px-6 py-3 text-white text-[17px] font-semibold">
        Show 120 stays
      </button>
    </footer>
  );
}

export default Footer;
