import React from 'react'
import { ColumnIcon, RowIcon } from '../icons'

const DirectionSwitcher = ({ ...rest }) => {
  return (
    <div className='flex flex-row'>
      {['row', 'col'].map((dir) => (
        <SwitcherButton key={dir} value={dir} {...rest} />
      ))}
    </div>
  )
}

export default DirectionSwitcher

const SwitcherButton = ({ value, currentDirection, ...rest }) => {
  const getBtnClasses = () => {
    return (
      'p-2 hover:bg-mainColor-100 ' +
      (value === currentDirection ? 'bg-mainColor-100' : '')
    )
  }

  const getIcon = () => {
    if (value === 'row') {
      return <RowIcon />
    }

    if (value === 'col') {
      return <ColumnIcon />
    }
  }

  return (
    <div className='border-[1px]'>
      <button type='button' value={value} className={getBtnClasses()} {...rest}>
        {getIcon()}
      </button>
    </div>
  )
}
