import React from 'react'
import './button.scss';

export const HeroTitle: React.SFC = () => { 

  var msgArr = new Array();

  msgArr[0] = "Hungry?";
  msgArr[1] = "Famished?";
  msgArr[2] = "You a starvin marvin?";

  const message = msgArr[Math.floor(Math.random()*msgArr.length)];

  return (
      <div className="home-wrapper hero">
        <h1 id="hero-title">{message}</h1>
        <p>Let's find you a place to eat</p>
      </div>
  )
};

export default HeroTitle;