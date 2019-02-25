import React, { Component } from 'react'
import './button.scss';
import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom';
import FoodTypes from '../../RootComponents/FoodTypes';
import Random from '../../RootComponents/Random';
import TravelTo from '../../RootComponents/TravelTo';
import Hero from '../../components/Home/Hero';
export default class Buttons extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="buttons">
        <Link to="/food-types"><button className="button food-types">food types</button></Link>
        <Link to="/Random"><button className="button random-choice">Random</button></Link>
        <Link to="/travel-to"><button className="button travel-to">Travel to</button></Link>

        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/food-types" component={FoodTypes} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/travel-to" component={TravelTo} />
        </Switch>
      </div>
      </BrowserRouter>
    )

  }
};