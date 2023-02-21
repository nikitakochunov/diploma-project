import React from 'react'
import RotateChevron from '../RotateChevron'

const SelectionButton = ({ text, name, onClick, isActive }) => {
  const getClasses = () => {
    return (
      'flex flex-row justify-between items-center w-full h-full py-4 px-6 cursor-pointer text-left transition-colors duration-200 hover:bg-mainColor-100 ' +
      (isActive ? 'bg-mainColor-100' : '')
    )
  }

  return (
    <div className={getClasses()} onClick={() => onClick(name)}>
      <button name={name} type='button'>
        {text}
      </button>
      <RotateChevron isActive={isActive} />
    </div>
  )
}

export default SelectionButton
