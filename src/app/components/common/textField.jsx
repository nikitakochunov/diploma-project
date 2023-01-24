import React from 'react'

const TextField = ({
  placeholder,
  name,
  isActive,
  onClick,
  onChange,
  value,
}) => {
  const getClasess = () => {
    return (
      'h-8 w-40 flex flex-row border-2 rounded items-center transition-colors ' +
      (isActive ? 'border-blue-500 ' : 'hover:border-neutral-700 duration-300 ')
    )
  }

  return (
    <div tabIndex={0} className={getClasess()} onClick={onClick}>
      <input
        type='text'
        name={name}
        className='w-full focus:outline-none pl-2'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className='px-2'>₽</span>
    </div>
  )
}

export default TextField
