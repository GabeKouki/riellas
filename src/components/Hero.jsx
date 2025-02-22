import "./Hero.css";

import React from "react";
import RiellasHomestyleHero from "../images/RiellasHomestyleHero.png";
import RiellasHomestyleLogo from "../images/RiellasHomestyleLogo.png";

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="TextSection">
        <img src={RiellasHomestyleLogo} alt="riellas-homestyle-logo" />
        {/* //TODO: Fix the fucking number so people can click to call. */}
        <p>3103 North Jerusalem Road Levittown, NY 11756 | (845) 777-7777</p>
        <span className="Slogan">Where great food brings people together</span>

        <button type="button" className="BtnPrimary">
          View Menu
        </button>
      </div>
      <div className="ImageSection">
        <img src={RiellasHomestyleHero} alt="riellas-homestyle-hero" />
      </div>
    </div>
  );
};

export default Hero;
