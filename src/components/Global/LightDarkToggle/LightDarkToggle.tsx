import React, { useRef, useEffect, RefObject } from "react";
const Darkmode = require("darkmode-js");
import "./LightDarkToggle.scss";

// Checks and sets theme from local storage for persistence
const checkTheme = (() => {
  window.localStorage.getItem("theme") === "Light"
    ? document.documentElement.setAttribute("data-theme", "light")
    : document.documentElement.setAttribute("data-theme", "dark");
})();

// Adds transition animation by class
let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

// const resetThemeToggle = (() => {
// })()

export const LightDarkToggle: React.FC = () => {
  let themeToggle: any = useRef(null);
  let themeToggleEle: Element = themeToggle.current;

  const [state, setState] = React.useState({
    currentTheme: "Light"
  });

  const [inputState, setInputState] = React.useState({
    inputChecked: true
  });

  // Sets theme in local storage
  const themePersist = (() => {
    state.currentTheme === "Light"
      ? window.localStorage.setItem("theme", state.currentTheme)
      : window.localStorage.setItem("theme", state.currentTheme);
  })();

  const inputToggle = (event: any) => {
    if (event.target.checked) {
      trans();
      document.documentElement.setAttribute("data-theme", "dark");
      // checked
    } else {
      // unchecked
      trans();
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Set local state
    document.documentElement.getAttribute("data-theme") === "dark"
      ? setState({ currentTheme: "Dark" })
      : setState({ currentTheme: "Light" });

    // Grabs input ref and focuses
    themeToggle.current.focus();
    themeToggleEle = themeToggle.current;
    console.log(themeToggleEle);

    // themeToggleEle.setAttribute("unchecked","unchecked");
    // console.log(document.documentElement.getAttribute("data-theme") === "light");
    // state.currentTheme === 'Light'? setInputState({ inputChecked: true }) : setInputState({ inputChecked: false });
  };

  // const lol1 = () => {
  //   new Darkmode().showWidget()
  // }

  // console.log(inputState.inputChecked);

  // const lol = (() => {
  //   if (document.documentElement.getAttribute("data-theme") === "light") {
  //     themeToggleEle.setAttribute("Unchecked", "unchecked")
  //   }  else {
  //     themeToggleEle.setAttribute("checked","checked")
  //   }
  // })()
  const options = {
    label: "🌓"
  };
  // {window.localStorage.getItem('theme') === 'Dark' ? themeToggleEle.setAttribute("Checked", "Checked") : console.log('lol')}
  return (
    <>
      <div className="toggle-container">
        {new Darkmode(options).showWidget()}
        <p className="toggle-themeName">{state.currentTheme}</p>
        <input
          ref={themeToggle}
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
