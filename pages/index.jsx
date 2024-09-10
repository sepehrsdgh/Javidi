import React, { useState } from "react";
import ModalController from "../components/input/modalController";

export default function TestInput() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((currentMode) => !currentMode);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleModal}
        className="bg-gray-800 text-white px-8 py-2 text-lg"
      >
        Tympanometry
      </button>
      {showModal && (
        <ModalController toggleModal={toggleModal} />
      )}
    </div>
  );
}
