import React, { Component } from 'react'
import Buttons from '../../components/Home/Buttons';
import './home.scss';

export default class Home extends Component {

  render() {
    return (
      <div className="home-wrapper">
      <img src="../assets/images/noodles.png" alt="Place to Eat" className="logo"/>
        <h1>Hungry?</h1>
        <p>Let's find you a place to eat</p>
        <Buttons />
      </div>
    )
  }
}
