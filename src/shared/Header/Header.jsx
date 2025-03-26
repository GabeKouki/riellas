import "./Header.css";

import React from "react";
import Hamburger from '../../assets/Hamburger.png' 

const Header = () => {
  return (
    <header>
      <nav>
        <div className="NavHeader">
          <img src={Hamburger} className="NavHamburger" />
          <p>Menu</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
