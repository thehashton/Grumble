import React from "react";

import "./home.scss";
import Buttons from "../../components/Home/Buttons";
import HeroLogo from "../../components/Home/HeroLogo";
import HeroTitle from "../../components/Home/HeroTitle";
import Search from "../../components/Search/Search";
import PostCodeChecker from "../../RootComponents/PostCodeChecker";

export const Home: React.SFC = () => {
  return (
    <div className={"Home"}>
      {localStorage.getItem("postCode") === null ? (
        <PostCodeChecker />
      ) : (
        <>
          <HeroTitle />
          <HeroLogo />
          <Search />
          <Buttons />
        </>
      )}
    </div>
  );
};

export default Home;
