import searchIcon from "../../assets/search-icon.svg";

function Search() {
  return (
    <div className="border flex lg:ml-48 border-gray-300 rounded-full shadow-md items-center px-2 py-2 text-sm">
      <button className="pr-3 pl-4 border-r border-gray-300">Anywhere</button>
      <button className="px-3 border-r border-gray-300">Any Week</button>
      <button className="px-3 text-gray-500 font-normal">Add guests</button>
      <button className="rounded-full w-8 h-8 flex items-center justify-center bg-main">
        <img src={searchIcon} alt="search icon" className="w-3 h-3" />
      </button>
    </div>
  );
}

export default Search;
