import React from 'react'
import { ChevronDown } from '../../icons'

const SelectionButton = ({ text, name, onClick, isActive }) => {
  const getClasses = () => {
    return (
      'flex flex-row justify-between items-center w-full h-full py-4 px-6 cursor-pointer text-left transition-colors duration-200 hover:bg-mainColor-100 ' +
      (isActive ? 'bg-mainColor-100' : '')
    )
  }

  const rotateChevron = () => {
    return (
      'transition-transform duration-300 ' +
      (isActive ? 'rotate-180 translate-y-1' : '')
    )
  }

  return (
    <div className={getClasses()} onClick={() => onClick(name)}>
      <button name={name} type='button'>
        {text}
      </button>
      <span className={rotateChevron()}>
        <ChevronDown />
      </span>
    </div>
  )
}

export default SelectionButton
