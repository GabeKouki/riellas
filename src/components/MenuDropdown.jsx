import "../styles/MenuDropdown.css";

import React, { useEffect, useRef } from "react";
import { menuList } from "../utils/MenuList";
import { useNavigate } from "react-router-dom";

const MenuDropdown = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      if (menuOpen) return;
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <div
      ref={dropdownRef}
      className={`MenuDropdownContainer ${menuOpen ? "visible" : "hidden"}`}
    >
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
