import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="app-header">
      <a href="/" title="Go to homepage" className="app-logo">
        <img src={logo} alt="logo" />
      </a>

      <nav className="header-nav">
        <a href="/" className="header-nav__item header-nav__item--current">
          Home
        </a>
        <a href="/" className="header-nav__item">
          About me
        </a>
      </nav>
    </header>
  );
};

export default Header;
