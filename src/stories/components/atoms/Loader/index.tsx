/**
 * Loader is a component that renders a circular loading spinner. It is used to indicate that a process or action is currently in progress.
 *
 * Example usage:
 * <Loader />
 */

import React from "react";
import "./index.css";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <svg className="circular-loader" viewBox="25 25 50 50">
        <circle
          className="loader-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#FF0000"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default Loader;
