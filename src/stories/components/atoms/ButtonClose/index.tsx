/**
 * ButtonClose is a component that renders a close button element. It is used to trigger a close action when clicked.
 *
 * Props:
 * - onClick: Function to be called when the button is clicked.
 *
 * Example usage:
 * <ButtonClose onClick={handleClose} />
 */

// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

interface ButtonCloseProps {
  onClick: () => void;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({ onClick }): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close"
      className="absolute top-2 right-2 bg-white text-gray-500 dark:text-white hover:text-gray-700 z-50 dark:bg-transparent rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <title>Close</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default ButtonClose;
