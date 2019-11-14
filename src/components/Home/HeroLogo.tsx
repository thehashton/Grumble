import React from "react";
import "./button.scss";
const japNoodles = "../assets/images/japanese-noodles.png";

export const HeroLogo: React.SFC = () => {
  return (
    <div className="hero-logo">
      <a href="/">
        <img src={japNoodles} alt="Place to Eat" className="logo" />
      </a>
    </div>
  );
};

export default HeroLogo;
