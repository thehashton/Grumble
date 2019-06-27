import React from 'react';
import './header.scss';
import { NavLink, Switch, Route } from 'react-router-dom';

const Header = (props: any) => {
    return (
        <div className={"header"}>
            <div className={"logo"}>
                <NavLink exact to="/" activeClassName="active"><h1>EAT</h1></NavLink>
            </div>

            <ul className={"menu"}>
                <li className={"menu__item"}><NavLink exact to="/about" className={"menu__link"} activeClassName="active">About</NavLink></li>
                <li className={"menu__item"}><NavLink to="/account" className={"menu__link"}>Account</NavLink></li>
                <li className={"menu__item"}><NavLink to="/faq" className={"menu__link"}>FAQ</NavLink></li>
                <li className={"menu__item"}><NavLink to="/contact" className={"menu__link"}>Contact</NavLink></li>
            </ul>

        </div>
    )
}
export default Header;