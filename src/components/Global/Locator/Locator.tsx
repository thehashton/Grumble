import React from "react";
import "./Locator.scss";
import getCurrentPosition from "../../../utils/getCurrentPosition";

const Locator: React.FC = () => {
  return (
    <button type={"button"} onClick={getCurrentPosition} className={"Location"}>
      <img
        src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png"
        alt="Locator"
      />
    </button>
  );
};

export default Locator;
