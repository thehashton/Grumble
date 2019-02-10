import React, { Component } from 'react'
import './button.scss';

export default class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="food-types">food types</button>
        <button className="random-choice">Random</button>
        <button className="location">different location</button>
      </div>
    )
  }
}
