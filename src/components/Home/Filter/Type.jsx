import { forwardRef } from "react";

const Type = forwardRef(({ src, label, active }, forwardedRef) => {
  return (
    <button
      ref={forwardedRef}
      className={`h-full hover:opacity-100 transition-all cursor-pointer after:content-[''] relative after:bottom-0 after:left-0 after:w-full after:h-[2px] ${
        active
          ? "opacity-100 after:bg-black after:absolute"
          : "opacity-50 hover:after:absolute after:bg-gray-300"
      }`}
    >
      <img className="w-7 mx-auto mb-1 text-gray" src={src} alt={label} />
      <p className="text-xs text-center whitespace-nowrap">{label}</p>
    </button>
  );
});

export default Type;
