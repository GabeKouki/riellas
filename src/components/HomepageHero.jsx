import "../styles/HomepageHero.css";

import React from "react";
import HomepageHeroImage from "../assets/HeroHomepageImage.png";
const HomepageHero = () => {
  return (
    <div className="HomepageHeroContainer">
      <img className="HomepageHeroImage" src={HomepageHeroImage} alt="" />
      <h1>Riella's Homestyle</h1>
      <p>
        Where every dish tells a story of tradition, warmth, and homestyle
        comfort. Experience our chef-crafted seasonal menu in a welcoming
        atmosphere.
      </p>
      <button className="CTAButton">Explore Our Menu</button>
    </div>
  );
};

export default HomepageHero;
