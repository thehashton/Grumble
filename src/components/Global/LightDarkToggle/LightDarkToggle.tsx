import React from "react";
import "./LightDarkToggle.scss";

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

export const LightDarkToggle: React.FC = () => {
  const [state, setState] = React.useState({
    currentTheme: "Light"
  });

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
    document.documentElement.getAttribute("data-theme") === "dark"
      ? setState({ currentTheme: "Dark" })
      : setState({ currentTheme: "Light" });
  };

  return (
    <>
      <div className="toggle-container">
        <p className="toggle-themeName">{state.currentTheme}</p>
        <input
          onChange={inputToggle}
          type="checkbox"
          name="theme"
          id="switch"
        />
        <label htmlFor="switch" className="switch-label"></label>
      </div>
    </>
  );
};

export default LightDarkToggle;
