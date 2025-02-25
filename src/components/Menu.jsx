import "./Menu.css";

import React, { useState } from "react";
import MenuDropdown from "./MenuDropdown/MenuDropdown";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [currentTab, setCurrentTab] = useState("");

  const handleTabSwitch = (tab) => {
    if (tab === currentTab) {
      setCurrentTab("");
      return;
    }
    setCurrentTab(tab);
  };

  const handlePageSwitch = (page) => {
    setCurrentPage(page);
    setCurrentTab("");
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
      <MenuDropdown
        handlePageSwitch={handlePageSwitch}
        handleTabSwitch={handleTabSwitch}
        currentTab={currentTab}
      />
      {currentPage && (
        <div className="MenuItems">
          {currentPage.map((pizza, index) => {
            return (
              <div
                className="MenuItem"
                key={pizza.name}
                style={{
                  animationDelay: `${Math.ceil((index + 1) / 2) * 0.08}s`,
                }}
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
