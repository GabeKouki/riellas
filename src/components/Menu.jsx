import "./Menu.css";

import React, { useState } from "react";
import Pizzas from "../MenuItems/Pizzas";
import Appetizers from "../MenuItems/Appetizers";
import { ReactComponent as DropdownArrow } from "../images/DropdownArrow.svg";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(Pizzas);
  const [currentTab, setCurrentTab] = useState("");

  const handleTabSwitch = (tab) => {
    if (tab == currentTab) {
      setCurrentTab("");
      return;
    }
    setCurrentTab(tab);
  };

  return (
    <div className="MenuContainer">
      <div className="MenuHeader">
        <span className="MenuLine" />
        <h1>Menu</h1>
        <span className="MenuLine" />
      </div>
      <div className="Disclaimer">
        <p>* Prices shown are cash prices *</p>
      </div>
      <div className="DropdownContainer">
        <div
          className={`DropdownItem ${currentTab === "Takeout" ? "active" : ""}`}
          onClick={() => handleTabSwitch("Takeout")}
        >
          <span className="DropdownHeader">
            <h5>Take-out</h5> <DropdownArrow className="DropdownArrow" />
          </span>
          {currentTab === "Takeout" && (
            <div className="DropdownContent">
              <h5>Pizzas</h5>
              <h5>Calzones</h5>
              <h5>Appetizers</h5>
              <h5>Sides</h5>
              <h5>Drinks</h5>
              <h5>Desserts</h5>
            </div>
          )}
        </div>
        {/* <button className="DropdownButton">
          Take Out <DownArrow className="DropdownArrow" />
        </button>
        <button className="DropdownButton">
          Dining Room <DownArrow className="DropdownArrow" />
        </button>
        <button className="DropdownButton">
          Catering <DownArrow className="DropdownArrow" />
        </button>
        <button className="DropdownButton">
          Party Packages <DownArrow className="DropdownArrow" />
        </button> */}
      </div>
      {currentPage && (
        <div className="MenuItems">
          {currentPage.map((pizza, index) => {
            return (
              <div
                className="MenuItem"
                key={pizza.name}
                style={{ animationDelay: `${(index + 1) * 0.03}s` }}
              >
                <h2>{pizza.name}</h2>
                <p>${pizza.price.toFixed(2)}</p>
              </div>
            );
          })}
        </div>
      )}

      {!currentPage && (
        <div className="MenuInformation">
          <h1>Hey</h1>
          <h1>Hey</h1>
        </div>
      )}
    </div>
  );
};

export default Menu;
