import React from "react";
import { NavLink } from 'react-router-dom'
import logo from "../assets/img/logo.svg";

const Header = ()=>{
    return(
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className={'navbar-brand'}>
                    <img src={logo} alt="logo" width="80" className="App-logo"/>
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="articles" className={'navbar-brand'}>
                            Articulos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );

}

export default Header;