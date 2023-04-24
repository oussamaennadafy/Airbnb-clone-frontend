// dynamic content
import AuthModal from "./../utilities/components/AuthModal";
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
  const [selectedCategory, setSetselectedCategory] = useState("Amazing views");
  const toggleMenu = () => {
    setDisplayMenu((previousMenuState) => !previousMenuState);
  };
  useEffect(() => {
    if (displayAuthModal) document.body.classList.add("overflow-y-hidden");
    else document.body.classList.remove("overflow-y-hidden");
  }, [displayAuthModal]);
  return (
    <div className="max-w-screen font-medium">
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
      <Filter
        selectedCategory={selectedCategory}
        setSetselectedCategory={setSetselectedCategory}
      />
      <Main selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
}

export default Home;
