import React from 'react'

const ButtonLayout = ({ className, children, onClick }) => {
  return (
    <button
      className={
        'rounded px-2 py-1 font-bold w-full h-full ' +
        'transition-all duration-150 ' +
        className
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonLayout
