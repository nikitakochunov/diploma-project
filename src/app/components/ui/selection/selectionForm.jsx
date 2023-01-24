import React, { useState } from 'react'
import SelectionAddress from './selectionAddress'
import SelectionPrice from './selectionPrice'
import SelectionRooms from './selectionRooms'

const SelectionForm = () => {
  const [activeButton, setActiveButton] = useState({
    rooms: false,
    price: false,
    address: false,
  })

  const [value, setValue] = useState({
    rooms: [],
    price: { from: '', to: '' },
    address: '',
  })

  const rooms = [
    { type: 'number', label: '1', value: '1' },
    { type: 'number', label: '2', value: '2' },
    { type: 'number', label: '3', value: '3' },
    { type: 'number', label: '4', value: '4' },
    { type: 'text', label: 'Студия', value: 'studio' },
  ]

  const handleButtonClick = (targetName) => {
    setActiveButton((prevState) => {
      const newState = { ...prevState }
      Object.keys(newState).forEach((key) => {
        newState[key] = targetName === key ? !newState[key] : false
      })

      return newState
    })
  }

  const handleChange = (target) => {
    setValue((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  return (
    <form>
      <div className='flex flex-row bg-white rounded'>
        <div className='basis-1/4 border-r-2 border-r-neutral-200'>
          <SelectionRooms
            name='rooms'
            isActive={activeButton.rooms}
            rooms={rooms}
            defaultValues={value.rooms}
            onChange={handleChange}
            onButtonClick={handleButtonClick}
          />
        </div>
        <div className='basis-1/4 border-r-2 border-r-neutral-200'>
          <SelectionPrice
            name='price'
            value={value.price}
            isActive={activeButton.price}
            onClick={handleButtonClick}
            onChange={handleChange}
            onButtonClick={handleButtonClick}
          />
        </div>
        <div className='basis-2/4 '>
          <SelectionAddress
            name='address'
            value={value.address}
            isActive={activeButton.address}
            onClick={handleButtonClick}
            onChange={handleChange}
            onButtonClick={handleButtonClick}
          />
        </div>
      </div>
    </form>
  )
}

export default SelectionForm
