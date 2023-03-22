// dynamic content
import AuthModal from "../components/Home/AuthModal";
// static content
import AboveHeader from "../components/Home/AboveHeader";
import Filter from "../components/Home/Filter";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
import Footer from "../components/Home/Footer";

import { useState } from "react";

function Home() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayAuthModal, setDisplayAuthModal] = useState(false);
  const toggleMenu = () => {
    setDisplayMenu((previousMenuState) => !previousMenuState);
  };
  const hideModal = () => {
    if (displayMenu) setDisplayMenu(false);
  };
  return (
    <div onClick={hideModal} className="max-w-screen font-medium">
      {displayAuthModal && (
        <AuthModal setDisplayAuthModal={setDisplayAuthModal} />
      )}
      <AboveHeader />
      <Header
        setDisplayAuthModal={setDisplayAuthModal}
        displayMenu={displayMenu}
        toggleMenu={toggleMenu}
      />
      <Filter />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
