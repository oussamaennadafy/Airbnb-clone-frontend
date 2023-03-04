import { Link } from "react-router-dom";
import Logo from "../utilities/header/logo";
import Search from "../utilities/header/Search";
import UserDetails from "../utilities/header/UserDetails";

function Header() {
  return (
    <header className="flex items-center z-10 justify-between px-10 py-4 border-b border-gray-300 sticky top-0 bg-white">
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <UserDetails />
    </header>
  );
}

export default Header;
