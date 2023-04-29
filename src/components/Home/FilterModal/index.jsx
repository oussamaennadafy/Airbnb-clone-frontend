import React from "react";
import ModalWrapper from "../../../utilities/wrappers/ModalWrapper";
import HeaderModalWrapper from "../../../utilities/wrappers/HeaderModalWrapper";
import Main from "./Main";
import Footer from "./Footer";

function index({ setDisplayFilterModal, displayFilterModal }) {
  if (!displayFilterModal) return null;
  return (
    <ModalWrapper
      setDisplayModal={setDisplayFilterModal}
      displayModal={displayFilterModal}
      className="flex flex-col"
    >
      <HeaderModalWrapper setDisplayModal={setDisplayFilterModal}>
        Filter
      </HeaderModalWrapper>
      <Main />
      <Footer />
    </ModalWrapper>
  );
}

export default index;
