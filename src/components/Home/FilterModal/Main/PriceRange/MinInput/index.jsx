import React, { useState, useRef } from "react";

function MinInput() {
  const [minValue, setMinValue] = useState(100);
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setMinValue(e.target.value);
  };

  return (
    <label
      className="cursor-text border border-gray-400 outline outline-2 outline-transparent focus-within:outline-black rounded-lg px-3 pb-[6px] pt-[2px] w-full price-label"
      htmlFor="min"
      onClick={() => inputRef.current.focus()}
    >
      <span className="text-xs text-gray-500 select-none -mb-1">min price</span>
      <input
        className="px-1 block w-full outline-none"
        onChange={handleChange}
        value={minValue}
        ref={inputRef}
        type="number"
        name="min"
      />
    </label>
  );
}

export default MinInput;
