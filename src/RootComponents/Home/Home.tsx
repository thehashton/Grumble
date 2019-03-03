import React from 'react';
import './home.scss';
import Buttons from '../../components/Home/Buttons';
import HeroLogo from '../../components/Home/HeroLogo';
import HeroTitle from '../../components/Home/HeroTitle';

export const Home: React.SFC = () => { 
  var msgArr = new Array();

  msgArr[0] = "Hungry?";
  msgArr[1] = "Famished?";
  msgArr[2] = "You a starvin marvin?";

  const message = msgArr[Math.floor(Math.random()*msgArr.length)];

  return (
    <div>
      <HeroLogo />
      <HeroTitle />
      <Buttons />
    </div>
  )
};

export default Home;
