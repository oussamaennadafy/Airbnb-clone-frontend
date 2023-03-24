// dynamic content
import AuthModal from "../components/Home/AuthModal";
// static content
import AboveHeader from "../components/Home/AboveHeader";
import Filter from "../components/Home/Filter";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
import Footer from "../components/Home/Footer";

import { useState, useRef, useEffect } from "react";

function Home() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayAuthModal, setDisplayAuthModal] = useState(false);
  const toggleMenu = () => {
    setDisplayMenu((previousMenuState) => !previousMenuState);
  };
  const hideModal = () => {
    if (displayMenu) toggleMenu();
  };
  useEffect(() => {
    if (displayAuthModal)
      document.querySelector("body").classList.add("overflow-y-hidden");
    else document.querySelector("body").classList.remove("overflow-y-hidden");
  }, [displayAuthModal]);
  return (
    <div onClick={hideModal} className="max-w-screen font-medium">
      <AuthModal
        displayAuthModal={displayAuthModal}
        setDisplayAuthModal={setDisplayAuthModal}
      />
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
