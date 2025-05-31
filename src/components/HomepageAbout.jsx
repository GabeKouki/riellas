import "../styles/HomepageAbout.css";

import React from "react";
import AboutImage from "../assets/AboutImage.svg";
import { MoveRight } from "lucide-react";

const HomepageAbout = () => {
  return (
    <div className="HomepageAboutContainer">
      <div className="AboutImageWrapper">
        <img
          src={AboutImage}
          alt="Picture of the chefs cooking"
          className="AboutImage"
        />
      </div>
      <div className="AboutInfoContainer">
        <span className="AboutSplitText">
          <h1>About</h1>
          <h1>Us</h1>
        </span>
        <p>
          Founded in 2010, Riella's Homestyle began with a simple vision: to
          create a dining experience that celebrates the rich tapestry of
          flavors while honoring family recipes and locally-sourced ingredients.
        </p>
        <p>
          Our head chef, Maria Riella, brings over 20 years of culinary
          expertise from her training in Italy and France. Together with our
          passionate team, we craft dishes that tell a story and create moments
          to remember.
        </p>
        <p>
          Every ingredient is thoughtfully sourced from local farmers and
          suppliers who share our commitment to quality, sustainability, and the
          art of homestyle cooking.
        </p>
        <button className="AboutButton">
          Join Us Today <MoveRight size={20} strokeWidth={2} /> 
        </button>
      </div>
    </div>
  );
};

export default HomepageAbout;
