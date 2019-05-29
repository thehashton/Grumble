import React, { Component } from 'react';
import './Account.scss';
const blankAvatar = '../../assets/images/blank_avatar.svg';
const accountIcon = '../../assets/images/user-icon.svg';
const editIcon = '../../assets/images/edit-icon.svg';
const passwordIcon = '../../assets/images/password-icon.svg';
const addressIcon = '../../assets/images/address-icon.svg';
const wishlistIcon = '../../assets/images/wishlist-icon.svg';
const logoutIcon = '../../assets/images/logout-icon.svg';

export default class Account extends Component {

  //TODO tidy this dirty fucking code up
  toggleSidebar = function() {
    const contentEle: any = document.querySelector('.Content__wrapper');
    const sidebarEle: any = document.querySelector('.sidebar');

    sidebarEle.classList.toggle('active');
    contentEle.classList.toggle('active');
  }

  preventSideMenuItem = () => {
    const sidebarEle: any = document.querySelector('.sidebar');
    const contentEle: any = document.querySelector('.Content__wrapper');

    sidebarEle.classList.remove('active');
    sidebarEle.classList.add('active');
    contentEle.classList.remove('active');
    contentEle.classList.add('active');
  }

  render() {

    return (
      <div className={"Account"}>
        <div className="Account__content">
          <div className="Content__wrapper">
            <h1 className={"Account__title"}>Account Dashboard</h1>
            <p>Welcome _User_</p>
            <p>Admin content goes here</p>
          </div>

          <div
          onClick={this.toggleSidebar}
          className={`sidebar`}>
            <div className="avatar" title="avatar">
              <img src={blankAvatar}/>
            </div>
            <div
            onClick={this.toggleSidebar}
            className={`sidebar-minimise`}>
            </div>
            <ul className={"side-menu"}>
              <li className="side-menu__item" title="account" onClick={this.preventSideMenuItem}>
                <span className="side-menu__icon account">
                  <img src={accountIcon} alt="account"/>
                </span>
                <a  className="side-menu__link" href="#">My Account</a>
                </li>
              <li className="side-menu__item" title="edit" onClick={this.preventSideMenuItem}>
                <span className="side-menu__icon edit">
                  <img src={editIcon} alt="edit"/>
                </span>
                <a className="side-menu__link" href="#">Edit Account</a>
                </li>
              <li className="side-menu__item" title="password" onClick={this.preventSideMenuItem}>
              <span className="side-menu__icon password">
                  <img src={passwordIcon} alt="password"/>
                </span>
                <a className="side-menu__link" href="#">Password</a>
                </li>
              <li className="side-menu__item" title="address" onClick={this.preventSideMenuItem}>
              <span className="side-menu__icon address">
                  <img src={addressIcon} alt="address"/>
                </span>
                <a className="side-menu__link" href="#">Address</a>
                </li>
              <li className="side-menu__item" title="wishlist" onClick={this.preventSideMenuItem}>
              <span className="side-menu__icon wishlist">
                  <img src={wishlistIcon} alt="wishlist"/>
                </span>
                <a className="side-menu__link" href="#">Wish List</a>
                </li>
              <li className="side-menu__item" title="logout" onClick={this.preventSideMenuItem}>
              <span className="side-menu__icon logout">
                  <img src={logoutIcon} alt="Log Out"/>
                </span>
                <a className="side-menu__link" href="#">Logout</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
