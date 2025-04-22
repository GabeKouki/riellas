import '../styles/Header.css'

import React, { useState } from 'react'
import RiellasLogo from '../assets/RiellasLogo.svg'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useHeader } from '../context/HeaderContext'
import Sidebar from '../components/Sidebar'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { sidebarOpen, setSidebarOpen } = useHeader();


  return (
    <header>
      <nav>
        <img className="HeaderLogo" src={RiellasLogo} alt="Riellas Logo" />
        <div className="HeaderButtonContainer">
          <button className="HeaderButton">Home</button>
          <button className={`HeaderButton ${menuOpen ? "fill" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>Menu <ChevronDown  className={`HeaderChevron ${menuOpen ? 'flip' : ""}`} /></button>
          <button className="HeaderButton">Contact</button>
        </div>
        <div className="HeaderHamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          { sidebarOpen ? <X /> :<Menu /> }
        </div>
        <Sidebar />
      </nav>
    </header>
  )
}

export default Header