import React, { useRef, useState } from "react";

function MaxInput() {
  const [maxValue, setMaxValue] = useState("6500+");
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setMaxValue(e.target.value);
  };

  return (
    <label
      className="cursor-text border border-gray-400 outline outline-2 outline-transparent focus-within:outline-black rounded-lg px-3 pb-[6px] pt-[2px] w-full price-label"
      htmlFor="max"
      onClick={() => inputRef.current.focus()}
    >
      <span className="text-xs text-gray-500 font-normal select-none -mb-1">
        max price
      </span>
      <input
        id="max"
        className="px-1 block w-full outline-none price-input"
        onChange={handleChange}
        value={maxValue}
        ref={inputRef}
        type="text"
        name="max"
      />
    </label>
  );
}

export default MaxInput;
