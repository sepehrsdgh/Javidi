import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Tympanometry from "./tympanometry";

function ModalController({toggleModal }) {
  const [modalIndex, setModalIndex] = useState(0);
  const modals = [<Tympanometry toggleModal={toggleModal} />];
  return (
    <div className="fixed flex items-center justify-center w-screen h-screen top-0 left-0 bg-[#232b30bb]">
      <div className="flex fixed top-1/2 -translate-y-1/2 w-full justify-center items-center gap-16">
        {/* modal forward & backward */}
        <button className="bg-gray-300 rounded-md p-4">
          <IoChevronBack
            size={36}
            onClick={() => setModalIndex((currentIndex) => --currentIndex)}
          />
        </button>
        {modals[modalIndex]}
        <button className="bg-gray-300 rounded-md p-4">
          <IoChevronForward
            size={36}
            onClick={() => setModalIndex((currentIndex) => ++currentIndex)}
          />
        </button>
      </div>
    </div>
  );
}

export default ModalController;
