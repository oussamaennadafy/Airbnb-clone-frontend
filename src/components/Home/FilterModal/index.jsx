import React from "react";
import ModalWrapper from "../../../utilities/wrappers/ModalWrapper";

function index({ setDisplayFilterModal, displayFilterModal }) {
  if (!displayFilterModal) return null;
  return (
    <ModalWrapper
      setDisplayModal={setDisplayFilterModal}
      displayModal={displayFilterModal}
    >
      something special in this modal
    </ModalWrapper>
  );
}

export default index;
