import "../styles/Menu.css";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DineInMenuCategories, DineInMenuItems } from "../utils/DineInMenu";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const menus = {
  "dine-in": {
    categories: DineInMenuCategories,
    items: DineInMenuItems,
    name: "Dine-In",
    description: [
      "Experience our carefully crafted dishes in the warm ambiance of our dining room.",
      "All entrées are served with complimentary fresh-baked bread.",
    ],
    subtext:
      "All family Style dishes will serve 2-3 People. No Substitutions. All prices subject to tax.",
  },
};

const Menu = () => {
  const { menu } = useParams();
  const menuData = menus[menu] ?? menus["dine-in"];
  const [selectedCategory, setSelectedCategory] = useState(
    menuData.categories[0]
  );
  const [animationKey, setAnimationKey] = useState(0);
  const navigate = useNavigate();

  if (!(menu in menus)) {
    console.error(`Menu not found: "${menu}"`);
  }

  // Trigger animation when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAnimationKey(prev => prev + 1);
  };

  // Get filtered items for current category
  const filteredItems = menuData.items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="MenuContainer">
      <div className="BackToHome" onClick={() => navigate("/")}>
        <MoveLeft />
        <p>Back to Home</p>
      </div>
      <h1>{menuData.name} Menu</h1>
      <div className="MenuDescription">
        {menuData.description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="MenuCategories">
        {menuData.categories.map((category, index) => (
          <button
            key={index}
            className={`CategoryButton ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="MenuItems" key={animationKey}>
        {filteredItems.map((item, index) => (
          <div 
            className="MenuCards"
            key={`${item.name}-${animationKey}`}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <span>
              <h2>{item.name}</h2>
              {/* <h3>{item.description}</h3> */}
            </span>
            <h4>${item.price}</h4>
          </div>
        ))}
      </div>
      <h5>{menuData.subtext}</h5>
    </div>
  );
};

export default Menu;