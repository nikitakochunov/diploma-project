import React, { useState } from 'react'
import Button from '../../common/button'
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }

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
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col space-y-2'>
        <div className='flex flex-row flex-wrap bg-white rounded'>
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
        <div className='basis-1/4 self-end'>
          <Button
            className='py-2 px-7 bg-blue-600 hover:bg-blue-700 text-neutral-50 font-bold'
            type='submit'
          >
            Найти
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SelectionForm