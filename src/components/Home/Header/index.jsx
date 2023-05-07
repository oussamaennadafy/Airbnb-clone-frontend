import { Link } from "react-router-dom";
import Logo from "./logo";
import Search from "./Search";
import UserDetails from "./UserDetails";

const Header = ({ setDisplayAuthModal }) => {
  return (
    <header className="hidden md:flex justify-between z-20 px-12 py-4 border-b border-gray-200 sticky top-0 bg-white">
      <Link className="flex items-center" to="/">
        <Logo />
      </Link>
      <Search />
      <UserDetails setDisplayAuthModal={setDisplayAuthModal} />
    </header>
  );
};

export default Header;
