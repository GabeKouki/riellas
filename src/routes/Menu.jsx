import "../styles/Menu.css";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DineInMenuCategories, DineInMenuItems } from "../utils/DineInMenu";
import { TakeoutMenuCategories, TakeoutMenuItems } from "../utils/TakeoutMenu";
import { CateringMenuCategories, CateringMenuItems } from "../utils/CateringMenu";
import { PartyPackageCategories, PartyPackages, PartyPackageItems, PartyPackageInfo } from "../utils/PartyPackages";
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
  "take-out": {
    categories: TakeoutMenuCategories,
    items: TakeoutMenuItems,
    name: "Takeout",
    description: [
      "Enjoy our homestyle cooking in the comfort of your home.",
      "Call ahead or order online for pickup.",
      "All items packaged with care for maximum freshness."
    ],
    subtext:
      "All family Style dishes will serve 2-3 People. No Substitutions. All prices subject to tax.",
  },
  "catering": {
    categories: CateringMenuCategories,
    items: CateringMenuItems,
    name: "Catering",
    description: [
      "Perfect for your special events and gatherings.",
      "Fresh, homestyle cooking delivered to your venue.",
      "Contact us for custom catering packages."
    ],
    subtext:
      "All family Style dishes will serve 2-3 People. No Substitutions. All prices subject to tax.",
  },
  "party-packages": {
    categories: PartyPackageCategories,
    items: [...PartyPackages, ...PartyPackageItems], // Combine packages and items
    name: "Party Packages",
    description: [
      "Complete dining room party packages for your special occasions.",
      "Choose from our carefully curated package options.",
      "American Coffee, Tea, and Soda included with all packages."
    ],
    subtext: PartyPackageInfo.terms.join(" • "),
    additionalInfo: PartyPackageInfo,
    isPartyPackage: true, // Flag to handle different rendering
  }
};

const Menu = () => {
  const { menu } = useParams();
  const menuData = menus[menu] ?? menus["dine-in"];
  const [selectedCategory, setSelectedCategory] = useState(
    menuData.categories[0]
  );
  const [animationKey, setAnimationKey] = useState(0);
  const navigate = useNavigate();

  // Update selected category when menu changes
  useEffect(() => {
    setSelectedCategory(menuData.categories[0]);
    setAnimationKey((prev) => prev + 1);
  }, [menu, menuData.categories]);

  if (!(menu in menus)) {
    console.error(`Menu not found: "${menu}"`);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAnimationKey((prev) => prev + 1);
  };

  const filteredItems = menuData.items.filter(
    (item) => item.category === selectedCategory
  );

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }, []);

  // Render party package items differently
  const renderMenuItem = (item, index) => {
    if (menuData.isPartyPackage) {
      return (
        <div
          className="MenuCards"
          key={`${item.name}-${index}-${animationKey}`}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <span>
            <h2>{item.name}</h2>
            {item.description && <h3>{item.description}</h3>}
            {item.additionalCost && (
              <p className="additional-cost">{item.additionalCost}</p>
            )}
          </span>
          {item.price && <h4>{item.price}</h4>}
        </div>
      );
    }

    // Default rendering for other menus
    return (
      <div
        className="MenuCards"
        key={`${item.name}-${index}-${animationKey}`}
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
      >
        <span>
          <h2>{item.name}</h2>
          {item.description && <h3>{item.description}</h3>}
        </span>
        <h4>${item.price}</h4>
      </div>
    );
  };

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

      {/* Show contact info for party packages */}
      {/* {menuData.isPartyPackage && menuData.additionalInfo && (
        <div className="ContactInfo">
          <p><strong>Phone:</strong> {menuData.additionalInfo.contactInfo.phone}</p>
          <p><strong>Website:</strong> {menuData.additionalInfo.contactInfo.website}</p>
          <p><strong>Address:</strong> {menuData.additionalInfo.contactInfo.address}</p>
        </div>
      )} */}

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
        {filteredItems.map((item, index) => renderMenuItem(item, index))}
      </div>

      {/* Show service style info for party packages */}
      {menuData.isPartyPackage && selectedCategory !== "Package Options" && menuData.additionalInfo && (
        <div className="ServiceInfo">
          <h4>Service Style:</h4>
          <p>Appetizers: {menuData.additionalInfo.serviceStyle.appetizers}</p>
          <p>Salads: {menuData.additionalInfo.serviceStyle.salads}</p>
          <p>Pasta: {menuData.additionalInfo.serviceStyle.pasta}</p>
          <p>Entrees: {menuData.additionalInfo.serviceStyle.entrees}</p>
        </div>
      )}

      <h5>{menuData.subtext}</h5>

      {/* Show what's included for party packages */}
      {menuData.isPartyPackage && menuData.additionalInfo && (
        <div className="IncludedItems">
          <h4>Included:</h4>
          <p>{menuData.additionalInfo.included.join(", ")}</p>
          <h4>Available:</h4>
          <p>{menuData.additionalInfo.available.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default Menu;