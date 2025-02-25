import "./Header.css";

import React from "react";
import Instagram from "../images/Instagram.svg";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="HeaderContainer">
      <nav>
        <div className="InfoContainer">
          <a
            target="_blank"
            href="https://www.instagram.com/riellas_homestyle/"
            rel="noreferrer noopener"
          >
            <img src={Instagram} alt="riellas-instagram" />
          </a>
          <p>Tue/Wed/Thu/Sun: 12–9:30 | Fri/Sat: 12–10:00</p>
        </div>
        <ul>
          <li className="NavLink">
            <Link>about</Link>
          </li>
          <li className="NavLink">
            <Link>catering</Link>
          </li>
          <li className="NavLink">
            <Link>private events</Link>
          </li>
          <li className="NavLink">
            <Link>contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
