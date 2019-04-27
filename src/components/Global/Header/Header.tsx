import React from 'react';
import './header.scss';

const Header = (props: any) => {
    return (
        <div className={"header"}>
            <div className={"logo"}>
                <h1>EAT</h1>
            </div>

            <ul className={"menu"}>
                <li className={"menu__item"}><a href={"#about"} className={"menu__link"}>About</a></li>
                <li className={"menu__item"}><a href={"#account"} className={"menu__link"}>Account</a></li>
                <li className={"menu__item"}><a href={"#faq"} className={"menu__link"}>FAQ</a></li>
                <li className={"menu__item"}><a href={"#contact"} className={"menu__link"}>Contact</a></li>
            </ul>
        </div>
   )}
   export default Header;