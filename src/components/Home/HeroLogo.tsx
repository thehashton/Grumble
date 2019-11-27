import React from "react";
import "./button.scss";
const japNoodles = "../assets/images/japanese-noodles.png";
const hamburger = "../assets/images/hamburger.svg";
const cloud = "../assets/images/hungry-cloud.png";

export const HeroLogo: React.SFC = () => {
  return (
    <div className="hero-logo">
      <a href="/">
        <img src={cloud} alt="Place to Eat" className="hero-logo__img" />
      </a>
    </div>
  );
};

export default HeroLogo;
