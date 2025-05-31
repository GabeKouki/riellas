import "../styles/Header.css";

import React, { useEffect, useState } from "react";
import RiellasLogo from "../assets/RiellasLogo.svg";
import { ChevronDown, Menu, X } from "lucide-react";
import { useHeader } from "../context/HeaderContext";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import MenuDropdown from "../components/MenuDropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { sidebarOpen, setSidebarOpen, header, setHeader } = useHeader();
  const navigate = useNavigate();

  const handleNavigate = (endpoint) => {
    setMenuOpen(false);
    navigate(`${endpoint}`);
  };

  return (
    <>
      <header>
        <nav>
          <img className="HeaderLogo" src={RiellasLogo} alt="Riellas Logo" onClick={() => handleNavigate("/")} />
          <div className="HeaderButtonContainer">
            <button className="HeaderButton" onClick={() => handleNavigate("/")}>Home</button>
            <button
              className={`HeaderButton ${menuOpen ? "fill" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Menu{" "}
              <ChevronDown
                className={`HeaderChevron ${menuOpen ? "flip" : ""}`}
              />
            </button>
            <button className="HeaderButton" onClick={() => handleNavigate("/contact")}>Contact</button>
          </div>
          <div
            className="HeaderHamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </div>
          <Sidebar />
        </nav>
      </header>
      <MenuDropdown menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
