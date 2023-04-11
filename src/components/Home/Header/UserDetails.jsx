import { useState, forwardRef } from "react";
import { earthIcon, menuIcon, userIcon } from "../../../assets/icons";
import { Link } from "react-router-dom";

const UserDetails = ({ displayMenu, toggleMenu, setDisplayAuthModal }) => {
  const showAuthModal = () => {
    toggleMenu();
    setDisplayAuthModal((prevModalState) => !prevModalState);
  };
  return (
    <div className="flex items-center justify-between relative">
      <Link to="/host" className="py-3 px-5 hover:bg-gray-100 rounded-full">
        Airbnb your home
      </Link>
      <button className="p-3 hover:bg-gray-100 rounded-full mr-2">
        <img className="w-4" src={earthIcon} alt="earth icon" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
        className="flex items-center justify-center gap-3 border border-gray-300 rounded-full p-[6px] hover:shadow-md transition"
      >
        <img className="w-4 m-[2px] ml-1" src={menuIcon} alt="menu icon" />
        <div className="after:content-[''] after:rounded-full relative after:w-[12px] after:h-[12px] after:absolute after:top-[-2px] after:right-[-2px] after:bg-main after:border after:border-white">
          <img className="w-8 h-8" src={userIcon} alt="user icon" />
        </div>
      </button>
      {displayMenu && (
        <nav
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute transition top-[140%] moveUp shadow-md right-0 rounded-md border border-gray-200 bg-white font-normal py-4 min-w-[80%]"
        >
          <ul className="flex flex-col border-b border-gray-200 w-full pb-4">
            <li
              onClick={showAuthModal}
              className="py-3 px-4 hover:bg-gray-50 cursor-pointer font-medium"
            >
              <a>Log in</a>
            </li>
            <li
              onClick={showAuthModal}
              className="py-3 px-4 hover:bg-gray-50 cursor-pointer"
            >
              <a>Sign Up</a>
            </li>
          </ul>
          <ul className="flex flex-col w-full pt-4">
            <li className="py-3 px-4 hover:bg-gray-50 cursor-pointer">
              <a href="./">Airbnb your home</a>
            </li>
            <li className="py-3 px-4 hover:bg-gray-50 cursor-pointer">
              <a href="./">host an experience</a>
            </li>
            <li className="py-3 px-4 hover:bg-gray-50 cursor-pointer">
              <a href="./">help</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default UserDetails;
