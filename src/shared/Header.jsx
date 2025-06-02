import "../styles/Header.css";

import React, { useState } from "react";
import RiellasLogo from "../assets/RiellasLogo.svg";
import { ChevronDown, Menu, X } from "lucide-react";
import { useHeader } from "../context/HeaderContext";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import MenuDropdown from "../components/MenuDropdown";
import { motion, useScroll } from "framer-motion";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState("initial");
  const { sidebarOpen, setSidebarOpen } = useHeader();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();


  const handleNavigate = (endpoint) => {
    setMenuOpen('hidden');
    navigate(`${endpoint}`);
  };

  const handleSetMenu = () => {
    if (menuOpen !== 'visible') {
      setMenuOpen('visible');
    } else {
      setMenuOpen('hidden');
    }
    

  }

  return (
    <>
      <header>
        <nav>
          <img
            className="HeaderLogo"
            src={RiellasLogo}
            alt="Riellas Logo"
            onClick={() => handleNavigate("/")}
          />
          <div className="HeaderButtonContainer">
            <button
              className="HeaderButton"
              onClick={() => handleNavigate("/")}
            >
              Home
            </button>
            <button
              className={`HeaderButton ${menuOpen === 'visible' ? "fill" : ""}`}
              onClick={() => handleSetMenu()}
              data-dropdown-activator
            >
              Menu
              <ChevronDown
                className={`HeaderChevron ${menuOpen === 'visible' ? "flip" : ""}`}
              />
            </button>
            <button
              className="HeaderButton"
              onClick={() => handleNavigate("/contact")}
            >
              Contact
            </button>
          </div>
          <div
            className="HeaderHamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </div>
          <Sidebar />
        </nav>

        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 80,
            left: 0,
            height: 2,
            backgroundColor: "var(--primary-green)",
            transformOrigin: "left",
            zIndex: 9999,
            width: "100%",
          }}
        />
      </header>
      <MenuDropdown menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
