import React, { Component } from 'react'
import './button.scss';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Button from './Button';
import FoodTypes from '../../RootComponents/FoodTypes';
import Random from '../../RootComponents/Random';
import TravelTo from '../../RootComponents/TravelTo';
export default class Buttons extends Component {

  onClick() {
    console.log('empty on click');
  }

  render() {

    return (
      <BrowserRouter>
      <div className="buttons">
        <Link to="/food-types"><Button className={"button food-types"} onlick={this.onClick} buttonText="Food Types"></Button></Link>
        <Link to="/Random"><Button className={"button random-choice"} onlick={this.onClick} buttonText="Random"></Button></Link>
        <Link to="/travel-to"><Button className={"button travel-to"} onlick={this.onClick} buttonText="Travel To"></Button></Link>

        <Switch>
          <Route exact path="/food-types" component={FoodTypes} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/travel-to" component={TravelTo} />
        </Switch>
      </div>
      </BrowserRouter>
    )

  }
};