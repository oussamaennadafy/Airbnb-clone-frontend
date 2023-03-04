function Search() {
  return (
    <div className="border ml-48 border-gray-300 rounded-full shadow-md flex items-center px-2 py-2 text-sm">
      <button className="pr-3 pl-4 border-r border-gray-300">Anywhere</button>
      <button className="px-3 border-r border-gray-300">Any Week</button>
      <button className="px-3 text-gray-500 font-normal">Add guests</button>
      <button className="rounded-full w-8 h-8 flex items-center justify-center bg-main">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            fill: "none",
            height: "12px",
            width: "12px",
            stroke: "white",
            strokeWidth: "5.33333",
            overflow: "visible",
          }}
        >
          <g fill="none">
            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default Search;
