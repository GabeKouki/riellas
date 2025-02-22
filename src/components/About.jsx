import './About.css'

import React from 'react'
import RiellasHomestyleDiningRoom from '../images/RiellasHomestyleDiningRoom.png'

const About = () => {
  return (
    <div className="AboutContainer">
      <h1>About Us</h1>
      <span className="ImageMask" />
      <img src={RiellasHomestyleDiningRoom} alt="riellas-homestyle-dining-room" />
    </div>
  )
}

export default About