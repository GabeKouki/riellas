import "./MenuDropdown.css";

import React from "react";
import { ReactComponent as DropdownArrow } from "../../images/DropdownArrow.svg";
import Pizzas from "../../MenuItems/Pizzas";
import Appetizers from "../../MenuItems/Appetizers";
import Starters from "../../MenuItems/Starters";
import Handhelds from "../../MenuItems/Handhelds";
import Pastas from "../../MenuItems/Pastas";
import Entrees from "../../MenuItems/Entrees";
import Sides from "../../MenuItems/Sides";
import Desserts from "../../MenuItems/Desserts";

const MenuDropdown = ({ handlePageSwitch, handleTabSwitch, currentTab }) => {
  const takeoutArray = [
    { name: "Starters", slug: Starters },
    { name: "HandHelds", slug: Handhelds },
    { name: "Pizzas", slug: Pizzas },
    { name: "Pastas", slug: Pastas },
    { name: "Entrees", slug: Entrees },
    { name: "Sides", slug: Sides },
    { name: "Desserts", slug: Desserts },
  ];
  return (
    <div className="DropdownContainer">
      <div className="DropdownItem">
        <span
          className="DropdownHeader"
          onClick={() => handleTabSwitch("Takeout")}
        >
          <h5>Take-out</h5>
          <DropdownArrow
            className="DropdownArrow"
            style={{
              transform: `rotate(${currentTab === "Takeout" ? 180 : 0}deg)`,
              transition: "transform 0.3s ease",
            }}
          />
        </span>
        <div
          className={`DropdownContent ${
            currentTab === "Takeout" ? "active" : ""
          }`}
        >
          {takeoutArray.map((item, index) => {
            return (
              <h5 onClick={() => handlePageSwitch(item.slug)} key={index}>
                {item.name}
              </h5>
            );
          })}
        </div>
      </div>
      <div className="DropdownItem">
        <span
          className="DropdownHeader"
          onClick={() => handleTabSwitch("Dinein")}
        >
          <h5>Dine-in</h5>
          <DropdownArrow
            className="DropdownArrow"
            style={{
              transform: `rotate(${currentTab === "Dinein" ? 180 : 0}deg)`,
              transition: "transform 0.3s ease",
            }}
          />
        </span>
        <div
          className={`DropdownContent ${
            currentTab === "Dinein" ? "active" : ""
          }`}
        >
          <h5 onClick={() => handlePageSwitch(Pizzas)}>Pizzas</h5>
          <h5 onClick={() => handlePageSwitch(Appetizers)}>Calzones</h5>
          <h5>Appetizers</h5>
          <h5>Sides</h5>
          <h5>Drinks</h5>
          <h5>Desserts</h5>
        </div>
      </div>
      <div className="DropdownItem">
        <span
          className="DropdownHeader"
          onClick={() => handleTabSwitch("Catering")}
        >
          <h5>Catering</h5>
          <DropdownArrow
            className="DropdownArrow"
            style={{
              transform: `rotate(${currentTab === "Catering" ? 180 : 0}deg)`,
              transition: "transform 0.3s ease",
            }}
          />
        </span>
        <div
          className={`DropdownContent ${
            currentTab === "Catering" ? "active" : ""
          }`}
        >
          <h5 onClick={() => handlePageSwitch(Pizzas)}>Pizzas</h5>
          <h5 onClick={() => handlePageSwitch(Appetizers)}>Calzones</h5>
          <h5>Appetizers</h5>
          <h5>Sides</h5>
          <h5>Drinks</h5>
          <h5>Desserts</h5>
        </div>
      </div>
      <div className="DropdownItem">
        <span
          className="DropdownHeader"
          onClick={() => handleTabSwitch("Parties")}
        >
          <h5>Parties</h5>
          <DropdownArrow
            className="DropdownArrow"
            style={{
              transform: `rotate(${currentTab === "Parties" ? 180 : 0}deg)`,
              transition: "transform 0.3s ease",
            }}
          />
        </span>
        <div
          className={`DropdownContent ${
            currentTab === "Parties" ? "active" : ""
          }`}
        >
          <h5 onClick={() => handlePageSwitch(Pizzas)}>Pizzas</h5>
          <h5 onClick={() => handlePageSwitch(Appetizers)}>Calzones</h5>
          <h5>Appetizers</h5>
          <h5>Sides</h5>
          <h5>Drinks</h5>
          <h5>Desserts</h5>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
