import './Hero.css'

import React from 'react'
import RiellasHomestyleHero from '../images/RiellasHomestyleHero.png'
import RiellasHomestyleLogo from '../images/RiellasHomestyleLogo.png'
import { ReactComponent as DownArrow} from '../images/DownArrow.svg'

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="TextSection">
        <img src={RiellasHomestyleLogo} alt="riellas-homestyle-logo" />
        <span className="Slogan">Where great food brings people together</span>

        <button type="button" className="BtnPrimary">View Menu</button>
      </div>
      <div className="ImageSection">
        <img src={RiellasHomestyleHero} alt="riellas-homestyle-hero" />
      </div>
    </div>
  )
}

export default Hero