import '../styles/ToolTip.css'

import React from 'react'

const ToolTip = () => {
  return (
    <div className="ToolTipContainer">
      <p>
      For private events and catering inquiries, please contact our events
      team at <strong style={{ fontWeight: "normal", color: "var(--primary-red)"}}>events@riellashomestyle.com</strong>
      </p>
    </div>
  )
}

export default ToolTip