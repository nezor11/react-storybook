import { BodyCopy } from "@/stories/components/atoms/BodyCopy";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import React from "react";

interface ModalProps {
  onClose: () => void; // Propiedad para cerrar el modal
}

/**
 * Modal component.
 */
export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const handleClose = () => {
    console.log("Closing modal");
    onClose(); // Llama a la función onClose cuando se hace clic en el botón de cierre
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white z-50 w-full h-full">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <TitleCopy
        text="Modal"
        mods="text-3xl uppercase text-primary-500 font-medium"
      />
      <BodyCopy
        tag="div"
        text="Me cago en tus muelas"
        mods="text-3xl uppercase text-primary-500 font-medium"
      />
    </div>
  );
};
