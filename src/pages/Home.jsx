import AboveHeader from "../components/Home/AboveHeader";
import Filter from "../components/Home/Filter";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
import Footer from "../components/Home/Footer";

import { useState } from "react";

function Home() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleMenu = () => {
    setDisplayMenu((previousMenuState) => !previousMenuState);
  };
  const hideOverlay = () => {
    if (displayMenu) setDisplayMenu(false);
  };
  return (
    <div onClick={hideOverlay} className="max-w-screen font-medium">
      <AboveHeader />
      <Header displayMenu={displayMenu} toggleMenu={toggleMenu} />
      <Filter />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
