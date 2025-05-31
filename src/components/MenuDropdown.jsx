import "../styles/MenuDropdown.css";

import React from "react";
import { menuList } from "../utils/MenuList";
import { useNavigate } from "react-router-dom";

const MenuDropdown = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };
  return (
    <div className={`MenuDropdownContainer ${menuOpen ? "visible" : "hidden"}`}>
      <h4>Our Menu's</h4>
      {menuList.map((menu) => (
        <button
          className="MenuDropdownButton"
          onClick={() => handleNavigate(`/menu/${menu.endpoint}`)}
          key={menu.endpoint}
        >
          {menu.displayName}
        </button>
      ))}
    </div>
  );
};

export default MenuDropdown;
