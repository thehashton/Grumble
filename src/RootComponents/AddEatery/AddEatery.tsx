import React, { Component } from 'react';
import './addEatery.scss';

export default class AddEatery extends Component {
    render() {
        return (
            <>
                <h1>add eatery</h1>
                <form action="submit">
                  <p>Name: </p>
                  <input type="text" placeholder={"Name"}/>
                  <p>Address: </p>
                  <input type="text" placeholder={"Address"}/>
                  <div className={"foodtype-wrapper"}>
                    <span>Food Type: </span>
                    <select name="" id="">
                      <option value="Pizza">Pizza</option>
                      <option value="Chicken">Chicken</option>
                      <option value="Indian">Indian</option>
                      <option value="Chinese">Chinese</option>
                      <option value="English">English</option>
                      <option value="Chips">Fish & Chips</option>
                      <option value="Kebab">Kebab</option>
                      <option value="Carribean">Carribean</option>
                      <option value="Vietnamese">Vietnamese</option>
                      <option value="Thai">Thai</option>
                    </select>
                  </div>
                    <button className={'button'}>Submit</button>
                </form>
            </>
        )
    }
}
