import '../styles/Sidebar.css'

import React, { useState } from 'react'
import { useHeader } from '../context/HeaderContext'
import { ChevronDown } from 'lucide-react'
const Sidebar = () => {
  const { sidebarOpen } = useHeader();
  const [menuOpen, setMenuOpen] = useState(false)

  return (
<div className={`SidebarContainer ${sidebarOpen ? 'slideIn' : 'slideOut'}`}>
  <button className="HeaderButton">Home</button>
  <button onClick={() => setMenuOpen(!menuOpen)} className="HeaderButton">Menu <ChevronDown  className={`HeaderChevron ${menuOpen ? 'flip' : ""}`} /></button>
  <button className="HeaderButton">Contact</button>
</div>
  )
}

export default Sidebar