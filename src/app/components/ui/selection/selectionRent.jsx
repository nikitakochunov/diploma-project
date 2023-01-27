import React, { useState } from 'react'
import checkIfNonDigit from '../../../utils/checkIfNonDigit'
import { reduceNumByDigit } from '../../../utils/reduceNumByDigit'
import TextField from '../../common/textField'
import SelectionButton from './selectionButton'

const SelectionRent = ({ name, value, isActive, onButtonClick, onChange }) => {
  const DEFAULT_ACTIVE_STATE = {
    from: false,
    to: false,
  }

  const [active, setActive] = useState(DEFAULT_ACTIVE_STATE)

  const handleChange = ({ target }) => {
    // Содержит ли введенное значение НЕцифру
    const isNonDigit = checkIfNonDigit(target.value)
    if (isNonDigit) return

    onChange({ name: name, value: { ...value, [target.name]: target.value } })
  }

  const handleClick = ({ target }) => {
    setActive((prevState) => {
      const newState = { ...prevState }
      Object.keys(newState).forEach((key) => {
        newState[key] = target.name === key ? !newState[key] : false
      })

      return newState
    })
  }

  const handleButtonClick = (targetName) => {
    setActive(DEFAULT_ACTIVE_STATE)
    onButtonClick(targetName)
  }

  const getButtonText = () => {
    const { from, to } = value

    const reducedFrom = reduceNumByDigit(from)
    const reducedTo = reduceNumByDigit(to)

    if (reducedFrom && !reducedTo) {
      return 'от ' + reducedFrom
    }
    if (!from && to) {
      return 'до ' + reducedTo
    }
    if (from && to) {
      return reducedFrom + ' - ' + reducedTo
    }

    return 'Цена'
  }

  return (
    <div className='relative h-full w-full'>
      <SelectionButton
        text={getButtonText()}
        name={name}
        isActive={isActive}
        onClick={handleButtonClick}
      />

      {isActive && (
        <div className='rounded bg-white p-2 absolute top-16 flex flex-col space-y-2'>
          <div className='flex flex-row space-x-2'>
            <TextField
              name='from'
              placeholder='от'
              value={value.from}
              isActive={active.from}
              onClick={handleClick}
              onChange={handleChange}
            />
            <TextField
              name='to'
              placeholder='до'
              value={value.to}
              isActive={active.to}
              onClick={handleClick}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default SelectionRent
