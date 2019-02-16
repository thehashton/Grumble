import React, { Component } from 'react'
import './button.scss';
export default class Buttons extends Component {

  // Add active class to buttonsx
  activeButton() { 
    // Get all buttons with class="btn" inside the container
    var btns = document.getElementsByClassName("button");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(this: any) {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
      });
    } 
  }

  render() {
    return (
      <div className="buttons">
        <button className="button food-types" onClick={this.activeButton}>food types</button>
        <button className="button random-choice">Random</button>
        <button className="button location">different location</button>
      </div>
    )

  }
};