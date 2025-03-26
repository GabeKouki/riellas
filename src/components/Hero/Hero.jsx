import './Hero.css'

import React from 'react'
import Logo from '../../assets/RiellasLogo.png'
import Fork from '../../assets/Fork.png'

const Hero = () => {
  return (
    <div className="HeroContainer">
      <img src={Logo} className="HeroLogo"/>
      <img src={Fork} className="HeroFork"/>
      <button className="HeroButton">Online Menu</button>
    </div>
  )
}

export default Hero