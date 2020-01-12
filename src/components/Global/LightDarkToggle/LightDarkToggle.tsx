import React, { useRef, useEffect, RefObject } from "react";

import "./LightDarkToggle.scss";
const Darkmode = require("darkmode-js");

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
