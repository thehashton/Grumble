import React from "react";
import "./button.scss";
import "./HeroTitle.scss";
import UsersPostCode from "./UsersPostCode";

export const HeroTitle: React.SFC = () => {
  var msgArr = [];

  msgArr[0] = "Hungry?";
  msgArr[1] = "Famished?";
  msgArr[2] = "You a starvin marvin?";

  const message = msgArr[Math.floor(Math.random() * msgArr.length)];

  return (
    <div className="home-wrapper hero">
      <h1 id="hero-title">{message}</h1>
      <p className="strapline">
        Let's find you a place to eat near{" "}
        <UsersPostCode userPostCode={localStorage.getItem("postCode")} />
      </p>
    </div>
  );
};

export default HeroTitle;
