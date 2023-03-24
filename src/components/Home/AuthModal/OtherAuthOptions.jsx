import React from "react";

import {
  facebookIcon,
  googleIcon,
  AppleIcon,
  mailIcon,
} from "./../../../assets/icons";

function OtherAuthOptions() {
  return (
    <div className="mx-4 mb-4 text-center">
      <div className="relative">
        <span
          className="text-xs h-full text-gray-500 inline-block pb-2
      before:content[''] before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-[calc(50%-15px)] before:bg-slate-300
      after:content[''] after:absolute after:top-1/2 after:right-0 after:h-[1px] after:w-[calc(50%-15px)] after:bg-slate-300
      "
        >
          or
        </span>
      </div>
      <ul className="flex flex-col gap-3 py-3">
        <li className="w-full rounded-xl border-[1px] border-black hover:bg-gray-50">
          <button className="w-full flex py-3 px-5 items-center">
            <img className="w-5" src={facebookIcon} alt="facebook logo" />
            <p className="flex-1 font-normal">Continue with Facebook</p>
          </button>
        </li>
        <li className="w-full rounded-xl border-[1px] border-black hover:bg-gray-50">
          <button className="w-full flex py-3 px-5 items-center">
            <img className="w-5" src={googleIcon} alt="google logo" />
            <p className="flex-1 font-normal">Continue with Google</p>
          </button>
        </li>
        <li className="w-full rounded-xl border-[1px] border-black hover:bg-gray-50">
          <button className="w-full flex py-3 px-5 items-center">
            <img className="w-5" src={AppleIcon} alt="apple logo" />
            <p className="flex-1 font-normal">Continue with Apple</p>
          </button>
        </li>
        <li className="w-full rounded-xl border-[1px] border-black hover:bg-gray-50">
          <button className="w-full flex py-3 px-5 items-center">
            <img className="w-5" src={mailIcon} alt="mail logo" />
            <p className="flex-1 font-normal">Continue with Mail</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default OtherAuthOptions;
