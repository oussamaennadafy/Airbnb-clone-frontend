import { earthIcon, menuIcon, userIcon } from "../../../assets/icons";

function UserDetails() {
  return (
    <div className="flex items-center justify-between">
      <a className="py-3 px-5 hover:bg-gray-100 rounded-full" href="">
        Airbnb your home
      </a>
      <button className="p-3 hover:bg-gray-100 rounded-full mr-2">
        <img className="w-4" src={earthIcon} alt="earth icon" />
      </button>
      <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-full p-[6px] hover:shadow-md transition">
        <img className="w-4 m-[2px] ml-1" src={menuIcon} alt="menu icon" />
        <div className="after:content-[''] after:rounded-full relative after:w-[12px] after:h-[12px] after:absolute after:top-[-2px] after:right-[-2px] after:bg-main after:border after:border-white">
          <img className="w-8 h-8" src={userIcon} alt="user icon" />
        </div>
      </button>
    </div>
  );
}

export default UserDetails;
