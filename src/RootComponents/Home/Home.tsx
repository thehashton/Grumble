import React, { Component } from 'react'
import Buttons from '../../components/Home/Buttons';
import './home.scss';

export default class Home extends Component { 

  private heroTitle: null | HTMLDivElement = null; // hero title ref

  componentDidMount() {
    var msgArr = new Array();
  
    msgArr[0] = "Hungry?";
    msgArr[1] = "Famished?";
    msgArr[2] = "You a starvin marvin?";
      if (this.heroTitle) {
        this.heroTitle.innerHTML = msgArr[Math.floor(Math.random()*msgArr.length)];
      }
 }

  render() {
    return (
      <div className="home-wrapper">
      <img src="../assets/images/noodles.png" alt="Place to Eat" className="logo"/>
        <h1 id="hero-title" ref={c => (this.heroTitle = c as HTMLDivElement)}>Hungry?</h1>
        <p>Let's find you a place to eat</p>
        <Buttons />
      </div>
    )
  }
};
