import React from "react";

import "./home.scss";
import Buttons from "../../components/Home/Buttons";
import HeroLogo from "../../components/Home/HeroLogo";
import HeroTitle from "../../components/Home/HeroTitle";

export const Home: React.SFC = () => {
  return (
    <div className={"Home"}>
      <HeroLogo />
      <HeroTitle />
      <Buttons />
    </div>
  );
};

export default Home;
