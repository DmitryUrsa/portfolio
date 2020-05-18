import React from "react";
import "./Header.css";
import logo from "../../logo.svg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link to="/" title="Go to homepage" className="app-logo">
          <img src={logo} alt="logo" />
        </Link>

        <nav className="header-nav">
          <NavLink
            exact
            to="/"
            className="header-nav__item"
            activeClassName="header-nav__item--current"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="header-nav__item"
            activeClassName="header-nav__item--current"
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
