import React, { useEffect, useState } from 'react'
import api from '../../../api'
import { bgColor } from '../../../constants/tailwindClasses'
import SelectField from '../../common/selectField'

const SelectionAddress = ({
  name,
  value,
  isActive,
  onClick,
  onButtonClick,
  onChange,
}) => {
  const optionsNumber = 5

  const [inputValue, setInputvalue] = useState('')
  const [metroStations, setMetroStations] = useState([])
  const [districts, setDistricts] = useState([])

  useEffect(() => {
    api.districts.fetchAll().then((data) => setDistricts(data))
    api.metroStations.fetchAll().then((data) => setMetroStations(data))
  }, [])

  const handleChange = ({ target }) => {
    setInputvalue(target.value)
    onChange({ name: name, value: target.value })
  }

  const handleSelectItemClick = (data) => {
    onChange({ name: name, value: data })
    setInputvalue(data.textValue)
    handleButtonClick()
  }

  const handleButtonClick = () => {
    onButtonClick(name)
  }

  const filteredMetroStations = metroStations
    .filter(
      (underground) =>
        underground.label
          .toLowerCase()
          .includes(inputValue.split(' ').at(-1).toLowerCase()) // Вырезает из строки последнее слово
    )
    .splice(0, optionsNumber)

  const filteredDistricts = districts
    .filter(
      (district) =>
        district.label
          .toLowerCase()
          .includes(inputValue.split(' ').at(-1).toLowerCase()) // Вырезает из строки последнее слово
    )
    .splice(0, optionsNumber)

  const groupedOptions = [
    {
      label: 'Станции метро',
      text: 'Станция метро',
      type: 'metro',
      options: filteredMetroStations,
      optionInner: (option) => (
        <div className='-ml-3.5 flex items-center space-x-2'>
          <div className={'h-1.5 w-1.5 rounded ' + bgColor[option.color]}></div>
          <div>{option.label}</div>
        </div>
      ),
    },
    {
      label: 'Районы',
      text: 'Район',
      type: 'district',
      options: filteredDistricts,
    },
  ]

  return (
    <div className='relative h-full w-full'>
      <input
        type='text'
        value={inputValue}
        className='w-full outline-none p-4'
        placeholder='Адрес, метро или район'
        onChange={handleChange}
        onFocus={handleButtonClick}
      />
      {isActive && inputValue.length > 2 && (
        <div className='rounded py-1 bg-white absolute top-16'>
          <SelectField
            isGrouped={true}
            options={groupedOptions}
            onClick={handleSelectItemClick}
            textIfEmpty={['Ничего не найдено', 'Укажите другой адрес']}
          />
        </div>
      )}
    </div>
  )
}

export default SelectionAddress
