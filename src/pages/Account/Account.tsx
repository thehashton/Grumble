import React, { Component } from "react";
import "./Account.scss";
import { Route, Switch } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";

import adminAccount from "./SubComponents/adminAccount";
import Edit from "./SubComponents/Edit";
import Password from "./SubComponents/Password";
import Address from "./SubComponents/Address";
import Wishlist from "./SubComponents/Wishlist";
import Logout from "./SubComponents/Logout";
const blankAvatar = "../../assets/images/blank_avatar.svg";
const accountIcon = "../../assets/images/user-icon.svg";
const editIcon = "../../assets/images/edit-icon.svg";
const passwordIcon = "../../assets/images/password-icon.svg";
const addressIcon = "../../assets/images/address-icon.svg";
const wishlistIcon = "../../assets/images/wishlist-icon.svg";
const logoutIcon = "../../assets/images/logout-icon.svg";

export default class Account extends Component {
  //TODO tidy this dirty code up
  toggleSidebar = function() {
    const contentEle: any = document.querySelector(".Content__wrapper");
    const sidebarEle: any = document.querySelector(".sidebar");

    sidebarEle.classList.toggle("active");
    contentEle.classList.toggle("active");
  };

  preventSideMenuItem = () => {
    const sidebarEle: any = document.querySelector(".sidebar");
    const contentEle: any = document.querySelector(".Content__wrapper");

    sidebarEle.classList.remove("active");
    sidebarEle.classList.add("active");
    contentEle.classList.remove("active");
    contentEle.classList.add("active");
  };

  render() {
    return (
      <div className={"Account"}>
        <div className="Account__content">
          <div className="Content__wrapper">
            <h1 className={"Account__title"}>Account Dashboard</h1>
            <p>Welcome _User_</p>
            <p>Admin content goes here</p>
            <React.Fragment>
              <Route
                render={({ location }) => (
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={200}
                      classNames="fade"
                    >
                      <Switch location={location}>
                        <Route
                          exact
                          path="/account/adminAccount"
                          component={adminAccount}
                        />
                        <Route path="/account/edit" component={Edit} />
                        <Route path="/account/password" component={Password} />
                        <Route path="/account/address" component={Address} />
                        <Route path="/account/wishlist" component={Wishlist} />
                        <Route path="/account/logout" component={Logout} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                )}
              />
            </React.Fragment>
          </div>

          <div onClick={this.toggleSidebar} className={`sidebar`}>
            <div className="avatar" title="avatar">
              <img src={blankAvatar} alt="avatar" />
            </div>
            <ul className={"side-menu"}>
              <li
                className="side-menu__item"
                title="account"
                onClick={this.preventSideMenuItem}
              >
                <NavLink
                  exact
                  to={"/account/adminAccount"}
                  className={"side-menu__link"}
                  activeClassName="active"
                >
                  <span className="side-menu__icon account">
                    <img src={accountIcon} alt="account" />
                  </span>
                  <p>My Account</p>
                </NavLink>
              </li>
              <li
                className="side-menu__item"
                title="edit"
                onClick={this.preventSideMenuItem}
              >
                <NavLink
                  to={"/account/edit"}
                  className={"side-menu__link"}
                  activeClassName="active"
                >
                  <span className="side-menu__icon edit">
                    <img src={editIcon} alt="edit" />
                  </span>
                  <p>Edit</p>
                </NavLink>
              </li>
              <li
                className="side-menu__item"
                title="password"
                onClick={this.preventSideMenuItem}
              >
                <NavLink
                  to={"/account/password"}
                  className={"side-menu__link"}
                  activeClassName="active"
                >
                  <span className="side-menu__icon password">
                    <img src={passwordIcon} alt="password" />
                  </span>
                  <p>Password</p>
                </NavLink>
              </li>
              <li
                className="side-menu__item"
                title="address"
                onClick={this.preventSideMenuItem}
              >
                <NavLink
                  to={"/account/address"}
                  className={"side-menu__link"}
                  activeClassName="active"
                >
                  <span className="side-menu__icon address">
                    <img src={addressIcon} alt="address" />
                  </span>
                  <p>Address</p>
                </NavLink>
              </li>
              <li
                className="side-menu__item"
                title="wishlist"
                onClick={this.preventSideMenuItem}
              >
                <NavLink
                  to={"/account/wishlist"}
                  className={"side-menu__link"}
                  activeClassName="active"
                >
                  <span className="side-menu__icon wishlist">
                    <img src={wishlistIcon} alt="wishlist" />
                  </span>
                  <p>Wish List</p>
                </NavLink>
              </li>
              <li
                className="side-menu__item"
                title="logout"
                onClick={this.preventSideMenuItem}
              >
                <NavLink
                  to={"/account/logout"}
                  className={"side-menu__link"}
                  activeClassName="active"
                >
                  <span className="side-menu__icon logout">
                    <img src={logoutIcon} alt="Log Out" />
                  </span>
                  <p>Logout</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
