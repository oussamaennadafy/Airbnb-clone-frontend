import { Link } from "react-router-dom";
import Logo from "../utilities/header/logo";
import Search from "../utilities/header/Search";
import UserDetails from "../utilities/header/UserDetails";

function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 border-b border-gray-300">
      <Link to="/">
        <Logo color="#ff385c" />
      </Link>
      <Search />
      <UserDetails />
    </header>
  );
}

export default Header;
