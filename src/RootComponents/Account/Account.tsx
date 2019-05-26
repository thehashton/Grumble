import React, { Component } from 'react';
import './Account.scss';

export default class Account extends Component {
  render() {
    return (
      <div className={"Account"}>
        <h1>Account Dashboard</h1>
        <div className={"sidebar"}>
          <ul>
            <li className="sidebar__item">My Account</li>
            <li className="sidebar__item">Edit Account</li>
            <li className="sidebar__item">Password</li>
            <li className="sidebar__item">Address</li>
            <li className="sidebar__item">Wish List</li>
            <li className="sidebar__item">Logout</li>
          </ul>
        </div>
      </div>
    )
  }
}
