import React from "react";

import "./home.scss";
import Buttons from "../../components/Home/Buttons";
import HeroLogo from "../../components/Home/HeroLogo";
import HeroTitle from "../../components/Home/HeroTitle";
import Search from "../../components/Search/Search";

export const Home: React.SFC = () => {
  return (
    <div className={"Home"}>
      <div className={"Home__column-left"}>
        <HeroTitle />
        <HeroLogo />
      </div>
      <div className={"Home__column-right"}>
        <Search />
        <Buttons />
      </div>
    </div>
  );
};

export default Home;
