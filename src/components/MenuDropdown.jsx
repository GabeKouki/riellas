import "../styles/MenuDropdown.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const MenuDropdown = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const handleNavigate = (endpoint) => {
    setMenuOpen(false);
    navigate(`/menu/${endpoint}`);
  };

  const menuList = [
    { displayName: "Dine-In", endpoint: "dine-in" },
    { displayName: "Take-Out Menu", endpoint: "take-out" },
    { displayName: "Catering Menu", endpoint: "catering" },
    { displayName: "Party Packages", endpoint: "party" },
  ];

  return (
    <div className={`MenuDropdownContainer ${menuOpen ? "visible" : "hidden"}`}>
      <h4>Our Menu's</h4>
      {menuList.map((menu) => (
        <button
          className="MenuDropdownButton"
          onClick={() => handleNavigate(menu.endpoint)}
          key={menu.endpoint}
        >
          {menu.displayName}
        </button>
      ))}
      {/* <button className="MenuDropdownButton">Take-Out Menu</button>
      <button className="MenuDropdownButton">Catering Menu</button>
      <button className="MenuDropdownButton">Party Packages</button> */}
    </div>
  );
};

export default MenuDropdown;
