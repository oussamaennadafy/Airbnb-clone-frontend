import React from "react";
import ModalWrapper from "../../wrappers/ModalWrapper";
import HeaderModalWrapper from "../../wrappers/HeaderModalWrapper";

import Form from "./Form";
import OtherAuthOptions from "./OtherAuthOptions";

function AuthModal({ setDisplayAuthModal, displayAuthModal }) {
  if (!displayAuthModal) return null;
  return (
    <ModalWrapper
      setDisplayModal={setDisplayAuthModal}
      displayModal={displayAuthModal}
    >
      <HeaderModalWrapper setDisplayModal={setDisplayAuthModal}>
        Log in or sign up
      </HeaderModalWrapper>
      <div className="overflow-auto h-[80vh]">
        <Form />
        <OtherAuthOptions />
      </div>
    </ModalWrapper>
  );
}

export default AuthModal;
