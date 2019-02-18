import React from 'react'
import Buttons from '../../components/Home/Buttons';
import './home.scss';

export const Home: React.SFC = () => { 

  var msgArr = new Array();

  msgArr[0] = "Hungry?";
  msgArr[1] = "Famished?";
  msgArr[2] = "You a starvin marvin?";

  const message = msgArr[Math.floor(Math.random()*msgArr.length)];

  return (
    <div className="home-wrapper">
    <img src="../assets/images/noodles.png" alt="Place to Eat" className="logo"/>
      <h1 id="hero-title">{message}</h1>
      <p>Let's find you a place to eat</p>
      <Buttons />
    </div>
  )
};

export default Home;
