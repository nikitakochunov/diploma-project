import React from 'react'
import { animationClass } from '../../../constants/animationClass'

const ButtonLayout = ({ className, children }) => {
  return (
    <button
      className={
        'rounded px-2 py-1 font-bold w-full h-full ' +
        animationClass +
        className
      }
    >
      {children}
    </button>
  )
}

export default ButtonLayout
