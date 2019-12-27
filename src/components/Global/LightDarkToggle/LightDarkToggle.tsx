import React from "react";
import "./LightDarkToggle.scss";

const inputToggle = (event: any) => {
  if (event.target.checked) {
    // checked
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    // unchecked
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
};

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

export const LightDarkToggle: React.FC = () => {
  return (
    <div>
      <p>Light and Dark Mode</p>
      <div className="toggle-container">
        <input
          onChange={inputToggle}
          type="checkbox"
          name="theme"
          id="switch"
        />
        <label htmlFor="switch" className="switch-label"></label>
      </div>
    </div>
  );
};

export default LightDarkToggle;
