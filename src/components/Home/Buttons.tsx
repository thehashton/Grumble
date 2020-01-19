import React, { Component } from "react";

import "./button.scss";
import FoodTypes from "../../RootComponents/FoodTypes";
import Random from "../../RootComponents/Random";
import TravelTo from "../../RootComponents/TravelTo";
import Dialog from "../../components/Global/Dialog";
import AddEatery from "../../RootComponents/AddEatery";

import Button from "./Button";

export default class Buttons extends Component {
  state = {
    foodTypesOpen: false,
    randomChoiceOpen: false,
    travelToOpen: false,
    addEatery: false
  };

  render() {
    const {
      foodTypesOpen,
      randomChoiceOpen,
      travelToOpen,
      addEatery
    } = this.state;

    const selectionState = (() => {
      switch(foodTypesOpen || randomChoiceOpen || addEatery || travelToOpen) {
        case true:
          document.body.classList.add("selecting-eatery")
          document.body.classList.remove("IDLE")
          break;
        case false:
          document.body.classList.remove("selecting-eatery")
          document.body.classList.add("IDLE")
          break;
        default:
      }
    })()

    return (
      <div
        className={`lowerOptions
      ${
        foodTypesOpen || randomChoiceOpen || travelToOpen || addEatery
          ? `active`
          : ``
      }`}
      >
        <Button
          onClick={() => {
              this.setState({
                foodTypesOpen: true,
                randomChoiceOpen: false,
                travelToOpen: false,
                addEatery: false
              })
            }
          }
          className={`food-types ${foodTypesOpen ? `active` : ``}`}
          buttonText="Food Types"
        />
        <Button
          onClick={() =>
            this.setState({
              randomChoiceOpen: true,
              foodTypesOpen: false,
              travelToOpen: false,
              addEatery: false
            })
          }
          className={`random-choice ${randomChoiceOpen ? `active` : ``}`}
          buttonText="Random"
        />
        {/* <Button
          onClick={() =>
            this.setState({
              travelToOpen: true,
              randomChoiceOpen: false,
              foodTypesOpen: false,
              addEatery: false
            })
          }
          className={`travel-to ${travelToOpen ? `active` : ``}`}
          buttonText="Travel To"
        /> */}

        <Button
          onClick={() =>
            this.setState({
              travelToOpen: false,
              randomChoiceOpen: false,
              foodTypesOpen: false,
              addEatery: true
            })
          }
          className={`addEatery ${addEatery ? `active` : ``}`}
          buttonText="+"
        />

        <Dialog
          isOpen={this.state.foodTypesOpen}
          onClose={() => this.setState({ foodTypesOpen: false })}
          dialogClass={`food-types ${foodTypesOpen ? `active` : ``}`}
        >
          <FoodTypes />
        </Dialog>

        <Dialog
          isOpen={this.state.randomChoiceOpen}
          onClose={() => this.setState({ randomChoiceOpen: false })}
          dialogClass={`random-choice ${randomChoiceOpen ? `active` : ``}`}
        >
          <Random />
        </Dialog>

        <Dialog
          isOpen={this.state.travelToOpen}
          onClose={() => this.setState({ travelToOpen: false })}
          dialogClass={`travel-to ${travelToOpen ? `active` : ``}`}
        >
          <TravelTo />
        </Dialog>

        <Dialog
          isOpen={this.state.addEatery}
          onClose={() => this.setState({ addEatery: false })}
          dialogClass={`addEatery ${addEatery ? `active` : ``}`}
        >
          <AddEatery />
        </Dialog>
        <div
          className={`siteOverlay ${
            foodTypesOpen || randomChoiceOpen || travelToOpen || addEatery
              ? `active`
              : ``
          }`}
        ></div>
      </div>
    );
  }
}
