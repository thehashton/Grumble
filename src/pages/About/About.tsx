import React, { Component } from 'react'
import './About.scss';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <div className={"About__content"}>
          <h1>About</h1>
          <p>Find places to eat, recommended by people near you.</p>
          <p>The goal here at<strong> _Eat_</strong> is to make finding a place to chow-down <strong>easy</strong>, <strong>shareable</strong> and <strong>fun</strong>.</p>
          </div>
      </div>
    )
  }
}
