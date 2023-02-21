import React from 'react'
import { ChevronDown } from '../icons'

const RotateChevron = ({ isActive }) => {
  const rotateChevron = () => {
    return (
      'inline-block transition-transform duration-300 ' +
      (isActive ? 'rotate-180 translate-y-1' : '')
    )
  }

  return (
    <div className={rotateChevron()}>
      <ChevronDown />
    </div>
  )
}

export default RotateChevron
