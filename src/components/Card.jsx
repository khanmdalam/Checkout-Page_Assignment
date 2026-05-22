import React from 'react'

/**
 * Card – base container card
 */
const Card = ({ children, className = '', padding = true }) => {
  return (
    <div
      className={`
        bg-white border border-slate-200/80 rounded-xl shadow-card
        ${padding ? 'p-6' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Card
