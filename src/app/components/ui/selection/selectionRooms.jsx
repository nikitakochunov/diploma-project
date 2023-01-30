import React from 'react'
import firstLetterToUpper from '../../../utils/firstLetterToUpper'
import CheckIcon from '../../icons/checkIcon'
import SelectionButton from './selectionButton'

const SelectionRooms = ({
  name,
  rooms,
  defaultValues,
  onRoomClick,
  onButtonClick,
  isActive,
  onChange,
}) => {
  const roomsValues = rooms.filter((room) => room.type === 'number')
  const roomsTexts = rooms.filter((room) => room.type === 'text')

  const handleChange = (e) => {
    const { currentTarget } = e

    const newRooms = []
    rooms.forEach((room) => {
      // Если нажатого варианта нет среди уже выбранных вариантов,
      // то он добавляется в выбранные варианты
      if (
        room.value === currentTarget.value &&
        !isSelected(currentTarget.value)
      ) {
        newRooms.push(room.value)
      }

      // Если один из выбранных вариантов не соответствует нажатому,
      // то он остается в выбранных вариантах
      if (room.value !== currentTarget.value && isSelected(room.value)) {
        newRooms.push(room.value)
      }

      // Если нажатый вариант соответствует одному из выбранных,
      // то этот вариант убирается
    })

    onChange({ name, value: newRooms })
  }

  const isSelected = (value) => {
    return defaultValues.includes(value)
  }

  const getButtonClasses = (value) => {
    return (
      'h-10 w-10 rounded border-[1px] ' +
      (isSelected(value)
        ? 'border-mainColor-100 bg-mainColor-100 hover:border-mainColor-500 text-mainColor-500'
        : 'border-neutral-200 hover:border-neutral-700')
    )
  }

  const getRoomText = (label) => {
    return label + (roomsValues.at(-1).label === label ? '+' : '')
  }

  const getButtonPhrase = () => {
    const selectedRoomsValues = roomsValues
      .filter((room) => isSelected(room.value))
      .map((room) => getRoomText(room.label))

    const selectedRoomsTexts = roomsTexts
      .filter((room) => isSelected(room.value))
      .map((room) => room.label.toLowerCase())

    // Если не выбрано кол-во комнат, и...
    if (!selectedRoomsValues.length) {
      // выбраны другие варианты
      if (selectedRoomsTexts.length) {
        const firstWord = firstLetterToUpper(selectedRoomsTexts[0])
        const restWords = selectedRoomsTexts.slice(1)

        return firstWord + (restWords.length ? ', ' + restWords.join(', ') : '')
      }

      // не выбраны другие варианты — ничего не выбрано
      return 'Комнат'
    }

    // Если не выбран один вариант кол-ва комнат и...
    if (selectedRoomsValues.length === 1) {
      // выбраны другие варианты
      if (selectedRoomsTexts.length)
        return (
          selectedRoomsValues[0] + ' комн., ' + selectedRoomsTexts.join(', ')
        )

      // не выбраны другие варианты
      return (
        selectedRoomsValues[0] +
        (selectedRoomsValues[0].includes('+') ? ' комн.' : '-комнатную')
      )
    }

    // Если выбрано несколько вариантов кол-ва комнат, где...
    let isRange = true
    for (let i = 0; i < selectedRoomsValues.length - 1; i++) {
      if (+selectedRoomsValues[i] + 1 != selectedRoomsValues[i + 1][0]) {
        isRange = false
        break
      }
    }

    let phrase = ''
    // в каждом следующем варианте комнат на 1 больше, чем в предыдущем и варианте больше 2
    if (isRange && selectedRoomsValues.length > 2) {
      phrase =
        selectedRoomsValues[0] +
        ' - ' +
        selectedRoomsValues[selectedRoomsValues.length - 1] +
        ' комн.'
    }
    // в каждом следующем варианте комнат не больше на 1, чем в предыдущем или вариантов не больше 2
    else {
      phrase = selectedRoomsValues.join(', ') + ' комн.'
    }

    // и если выбраны или не выбраны другие варианты
    return (
      phrase +
      (selectedRoomsTexts.length ? ', ' + selectedRoomsTexts.join(', ') : '')
    )
  }

  return (
    <div className='relative h-full w-full'>
      <SelectionButton
        text={getButtonPhrase()}
        name='rooms'
        isActive={isActive}
        onClick={onButtonClick}
      />

      {isActive && (
        <div className='rounded bg-white p-2 absolute top-16 flex flex-col space-y-2'>
          <div className='flex flex-row items-center space-x-2'>
            {roomsValues.map((room, index) => (
              <button
                key={index}
                className={getButtonClasses(room.value)}
                onClick={handleChange}
                type='button'
                value={room.value}
              >
                {getRoomText(room.label)}
              </button>
            ))}
          </div>
          <div className='flex flex-col items-start space-y-2 '>
            {roomsTexts.map((room, index) => (
              <button
                key={index}
                value={room.value}
                className='flex flex-row items-center space-x-3'
                type='button'
                onClick={handleChange}
              >
                <span
                  className={
                    'h-5 w-5 rounded border-2 flex items-center' +
                    (isSelected(room.value) ? ' border-mainColor-500' : '')
                  }
                >
                  {isSelected(room.value) ? <CheckIcon /> : ''}
                </span>

                <span>{room.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SelectionRooms
