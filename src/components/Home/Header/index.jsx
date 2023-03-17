import { Link } from "react-router-dom";
import Logo from "./logo";
import Search from "./Search";
import UserDetails from "./UserDetails";

function Header() {
  return (
    <header className="hidden md:flex items-center z-10 justify-between px-8 py-4 border-b border-gray-300 sticky top-0 bg-white">
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <UserDetails />
    </header>
  );
}

export default Header;
