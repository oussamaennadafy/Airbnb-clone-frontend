import React from "react";
import ModalWrapper from "../../wrappers/ModalWrapper";
import Header from "./Header";
import Form from "./Form";
import OtherAuthOptions from "./OtherAuthOptions";

function AuthModal({ setDisplayAuthModal, displayAuthModal }) {
  if (!displayAuthModal) return null;
  return (
    <ModalWrapper
      setDisplayModal={setDisplayAuthModal}
      displayModal={displayAuthModal}
    >
      <Header setDisplayAuthModal={setDisplayAuthModal} />
      <div className="overflow-auto h-[80vh]">
        <Form />
        <OtherAuthOptions />
      </div>
    </ModalWrapper>
  );
}

export default AuthModal;
