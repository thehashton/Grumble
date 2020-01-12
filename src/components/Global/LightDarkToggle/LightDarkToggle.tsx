import React, { useRef, useEffect, RefObject } from "react";
const Darkmode = require("darkmode-js");
import "./LightDarkToggle.scss";

export const LightDarkToggle: React.FC = () => {
  const options = {
    label: "🌓"
  };

  return (
    <>
      <div className="toggle-container">
        {new Darkmode(options).showWidget()}
      </div>
    </>
  );
};

export default LightDarkToggle;
