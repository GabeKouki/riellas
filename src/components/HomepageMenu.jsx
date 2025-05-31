import "../styles/HomepageMenu.css";
import React from "react";
import { menuList } from "../utils/MenuList";
import { useNavigate } from "react-router-dom";

const HomepageMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="HomepageMenuContainer">
      <div className="MenuHeader">
        <span className="MenuSplitText">
          <h1>Great Food</h1>
          <h1>Better People</h1>
        </span>
        <p>
          At Riella's, every dish tells a story. Crafted with passion and care,
          our meals invite you to share moments of joy and connection. Explore
          our selection of culinary delights and experience how great food truly
          brings people together.
        </p>
      </div>

      <div className="MenuGrid">
        {menuList.map((menu) => (
          <div
            className="MenuCard"
            key={menu.endpoint}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent), url(${menu.image})`,
            }}
            onClick={() => navigate(`menu/${menu.endpoint}`)}
          >
            <div className="MenuOverlay">
              <h2>{menu.displayName}</h2>
              <p>{menu.infoText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageMenu;
